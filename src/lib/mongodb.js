import { MongoClient } from 'mongodb';
import bcrypt from 'bcryptjs';
import { portfolioData as defaultPortfolioData } from '@/data/portfolioData';

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || 'portfolio_db';

let cachedClientPromise = null;
let cachedClient = null;

export function getDefaultPortfolioData() {
  return defaultPortfolioData;
}

export async function connectToMongoDb() {
  if (!uri) {
    return null;
  }

  if (!cachedClient) {
    if (!cachedClientPromise) {
      cachedClientPromise = new MongoClient(uri).connect();
    }

    try {
      cachedClient = await cachedClientPromise;
    } catch (error) {
      cachedClientPromise = null;
      throw error;
    }
  }

  return cachedClient.db(dbName);
}

export async function ensureSeedData() {
  const db = await connectToMongoDb();

  if (!db) {
    return null;
  }

  const settingsCollection = db.collection('settings');
  const portfolioCollection = db.collection('portfolio');
  const sessionsCollection = db.collection('sessions');

  const adminUsername = process.env.ADMIN_USERNAME || 'admin';
  const adminPasswordHash = await bcrypt.hash(process.env.ADMIN_PASSWORD || 'admin123', 10);

  await settingsCollection.updateOne(
    { _id: 'admin_username' },
    { $set: { value: adminUsername } },
    { upsert: true },
  );

  await settingsCollection.updateOne(
    { _id: 'admin_password_hash' },
    { $set: { value: adminPasswordHash } },
    { upsert: true },
  );

  const existingPortfolio = await portfolioCollection.findOne({ _id: 'portfolio' });

  if (!existingPortfolio) {
    await portfolioCollection.insertOne({
      _id: 'portfolio',
      data: defaultPortfolioData,
      updatedAt: new Date(),
    });
  }

  return { db, settingsCollection, portfolioCollection, sessionsCollection };
}
