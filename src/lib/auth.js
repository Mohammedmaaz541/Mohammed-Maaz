import { randomBytes } from 'crypto';
import bcrypt from 'bcryptjs';
import { connectToMongoDb, ensureSeedData } from '@/lib/mongodb';

const ADMIN_SESSION_TTL_MS = 1000 * 60 * 60 * 12;

export async function verifyAdminCredentials(username, password) {
  const result = await ensureSeedData();

  if (!result) {
    return false;
  }

  const { settingsCollection } = result;
  const storedUsername = await settingsCollection.findOne({ _id: 'admin_username' });
  const storedPasswordHash = await settingsCollection.findOne({ _id: 'admin_password_hash' });

  if (!storedUsername || !storedPasswordHash) {
    return false;
  }

  return storedUsername.value === username && bcrypt.compareSync(password, storedPasswordHash.value);
}

export async function createAdminSession() {
  const result = await ensureSeedData();

  if (!result) {
    return null;
  }

  const token = randomBytes(32).toString('hex');
  const expiresAt = new Date(Date.now() + ADMIN_SESSION_TTL_MS);

  await result.sessionsCollection.insertOne({
    token,
    expiresAt,
  });

  return token;
}

export async function revokeAdminSession(token) {
  if (!token) {
    return;
  }

  const result = await ensureSeedData();
  if (!result) {
    return;
  }

  await result.sessionsCollection.deleteOne({ token });
}

export async function isValidAdminSession(token) {
  if (!token) {
    return false;
  }

  const result = await ensureSeedData();

  if (!result) {
    return false;
  }

  const session = await result.sessionsCollection.findOne({
    token,
    expiresAt: { $gt: new Date() },
  });

  return Boolean(session);
}

export async function requireAdminSession(token) {
  return isValidAdminSession(token);
}
