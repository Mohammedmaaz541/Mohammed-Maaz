import { randomBytes } from 'crypto';

const ADMIN_SESSION_TTL_MS = 1000 * 60 * 60 * 12;

export async function verifyAdminCredentials(username, password) {
  const expectedUsername = process.env.ADMIN_USERNAME?.trim();
  const expectedPassword = process.env.ADMIN_PASSWORD;

  if (!expectedUsername || !expectedPassword) {
    return false;
  }

  return username === expectedUsername && password === expectedPassword;
}

export async function createAdminSession() {
  const token = randomBytes(32).toString('hex');
  const expiresAt = new Date(Date.now() + ADMIN_SESSION_TTL_MS);

  return token;
}

export async function revokeAdminSession() {
  return;
}

export async function isValidAdminSession(token) {
  return Boolean(token && token.trim().length > 0);
}

export async function requireAdminSession(token) {
  return isValidAdminSession(token);
}
