import { promises as fs } from 'fs';
import path from 'path';
import { MongoClient } from 'mongodb';

const envPath = path.resolve(process.cwd(), '.env');
const portfolioPath = path.resolve(process.cwd(), 'data', 'portfolio-content.json');

const envFile = await fs.readFile(envPath, 'utf8');
const parsedEnv = Object.fromEntries(
  envFile
    .split(/\r?\n/)
    .filter((line) => line.includes('=') && !line.trim().startsWith('#'))
    .map((line) => {
      const [key, ...rest] = line.split('=');
      return [key.trim(), rest.join('=').trim()];
    }),
);

for (const [key, value] of Object.entries(parsedEnv)) {
  process.env[key] = value;
}

const mongoUri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || 'portfolio_db';

const sectionOrder = [
  'profile',
  'navigation',
  'processSteps',
  'skills',
  'experiences',
  'projects',
  'certifications',
  'achievements',
  'blogs',
  'github',
  'contact',
  'resume',
];

async function main() {
  if (!mongoUri) {
    throw new Error('MONGODB_URI is missing. Add it to your environment before running this seed script.');
  }

  const rawPortfolio = await fs.readFile(portfolioPath, 'utf8');
  const portfolio = JSON.parse(rawPortfolio);

  const client = new MongoClient(mongoUri);

  try {
    await client.connect();
    const db = client.db(dbName);

    const portfolioCollection = db.collection('portfolio');
    const sectionsCollection = db.collection('portfolio_sections');

    await portfolioCollection.updateOne(
      { _id: 'portfolio' },
      {
        $set: {
          data: portfolio,
          updatedAt: new Date(),
        },
      },
      { upsert: true },
    );

    for (const section of sectionOrder) {
      await sectionsCollection.updateOne(
        { _id: section },
        {
          $set: {
            data: portfolio[section],
            updatedAt: new Date(),
          },
        },
        { upsert: true },
      );
    }

    console.log('✅ Portfolio data seeded into MongoDB.');
    console.log(`Sections synced: ${sectionOrder.join(', ')}`);
  } finally {
    await client.close();
  }
}

main().catch((error) => {
  console.error('❌ Failed to seed portfolio data:', error);
  process.exit(1);
});
