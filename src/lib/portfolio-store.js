import { promises as fs } from 'fs';
import path from 'path';
import { connectToMongoDb, getDefaultPortfolioData } from '@/lib/mongodb';
import { PORTFOLIO_SECTION_ORDER } from '@/lib/portfolio-models';

const portfolioFilePath = path.join(process.cwd(), 'data', 'portfolio-content.json');

function normalizePortfolio(portfolio) {
  const defaultPortfolio = getDefaultPortfolioData();
  const mergedPortfolio = {
    ...defaultPortfolio,
    ...(portfolio || {}),
  };

  for (const section of ['profile', 'github', 'contact', 'resume']) {
    mergedPortfolio[section] = {
      ...(defaultPortfolio[section] || {}),
      ...(portfolio?.[section] || {}),
    };
  }

  for (const section of PORTFOLIO_SECTION_ORDER) {
    if (!(section in mergedPortfolio)) {
      mergedPortfolio[section] = defaultPortfolio[section] ?? [];
    }
  }

  return mergedPortfolio;
}

async function readStoredPortfolio() {
  try {
    const raw = await fs.readFile(portfolioFilePath, 'utf8');
    return normalizePortfolio(JSON.parse(raw));
  } catch {
    return null;
  }
}

async function writeStoredPortfolio(portfolio) {
  await fs.mkdir(path.dirname(portfolioFilePath), { recursive: true });
  await fs.writeFile(portfolioFilePath, JSON.stringify(normalizePortfolio(portfolio), null, 2), 'utf8');
}

async function readMongoPortfolio() {
  try {
    const db = await connectToMongoDb();

    if (!db) {
      return null;
    }

    const portfolioDocument = await db.collection('portfolio').findOne({ _id: 'portfolio' });

    if (portfolioDocument?.data) {
      return normalizePortfolio(portfolioDocument.data);
    }

    const sectionDocuments = await db
      .collection('portfolio_sections')
      .find({ _id: { $in: PORTFOLIO_SECTION_ORDER } })
      .toArray();

    if (!sectionDocuments.length) {
      return null;
    }

    const mergedPortfolio = getDefaultPortfolioData();

    for (const sectionDocument of sectionDocuments) {
      mergedPortfolio[sectionDocument._id] = sectionDocument.data ?? [];
    }

    return normalizePortfolio(mergedPortfolio);
  } catch {
    return null;
  }
}

async function writeMongoPortfolio(portfolio) {
  try {
    const db = await connectToMongoDb();

    if (!db) {
      return false;
    }

    const normalizedPortfolio = normalizePortfolio(portfolio);
    const sectionsCollection = db.collection('portfolio_sections');

    await db.collection('portfolio').updateOne(
      { _id: 'portfolio' },
      {
        $set: {
          data: normalizedPortfolio,
          updatedAt: new Date(),
        },
      },
      { upsert: true },
    );

    for (const section of PORTFOLIO_SECTION_ORDER) {
      await sectionsCollection.updateOne(
        { _id: section },
        {
          $set: {
            data: normalizedPortfolio[section],
            updatedAt: new Date(),
          },
        },
        { upsert: true },
      );
    }

    return true;
  } catch {
    return false;
  }
}

export async function getPortfolioContent() {
  const mongoPortfolio = await readMongoPortfolio();

  if (mongoPortfolio) {
    return mongoPortfolio;
  }

  const storedPortfolio = await readStoredPortfolio();

  if (storedPortfolio) {
    return storedPortfolio;
  }

  return normalizePortfolio(getDefaultPortfolioData());
}

export async function savePortfolioContent(portfolio) {
  const normalizedPortfolio = normalizePortfolio(portfolio);
  const savedToMongo = await writeMongoPortfolio(normalizedPortfolio);

  if (savedToMongo) {
    return normalizedPortfolio;
  }

  await writeStoredPortfolio(normalizedPortfolio);
  return normalizedPortfolio;
}

export async function resetPortfolioContent() {
  const defaultPortfolioData = normalizePortfolio(getDefaultPortfolioData());
  const savedToMongo = await writeMongoPortfolio(defaultPortfolioData);

  if (savedToMongo) {
    return defaultPortfolioData;
  }

  await writeStoredPortfolio(defaultPortfolioData);
  return defaultPortfolioData;
}
