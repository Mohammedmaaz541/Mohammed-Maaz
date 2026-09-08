import { connectToMongoDb, ensureSeedData, getDefaultPortfolioData } from '@/lib/mongodb';

export async function getPortfolioContent() {
  const result = await ensureSeedData();

  if (!result) {
    return getDefaultPortfolioData();
  }

  const portfolio = await result.portfolioCollection.findOne({ _id: 'portfolio' });

  if (!portfolio) {
    return getDefaultPortfolioData();
  }

  return portfolio.data;
}

export async function savePortfolioContent(portfolio) {
  const result = await ensureSeedData();

  if (!result) {
    return getDefaultPortfolioData();
  }

  await result.portfolioCollection.updateOne(
    { _id: 'portfolio' },
    { $set: { data: portfolio, updatedAt: new Date() } },
    { upsert: true },
  );

  return portfolio;
}

export async function resetPortfolioContent() {
  const result = await ensureSeedData();

  if (!result) {
    return getDefaultPortfolioData();
  }

  const defaultPortfolioData = getDefaultPortfolioData();

  await result.portfolioCollection.updateOne(
    { _id: 'portfolio' },
    { $set: { data: defaultPortfolioData, updatedAt: new Date() } },
    { upsert: true },
  );

  return defaultPortfolioData;
}
