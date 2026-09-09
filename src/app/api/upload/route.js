import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { requireAdminSession } from '@/lib/auth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const getStorageUrlFromSupabase = (supabaseUrl, bucketName, key) => {
  if (!supabaseUrl) {
    return null;
  }

  const baseUrl = supabaseUrl.replace(/\/$/, '');
  return `${baseUrl}/storage/v1/object/public/${bucketName}/${key}`;
};

const getStorageUrlFromEndpoint = (endpoint, bucketName, key) => {
  try {
    const endpointUrl = new URL(endpoint);
    const baseUrl = `${endpointUrl.protocol}//${endpointUrl.hostname}`;
    return `${baseUrl}/storage/v1/object/public/${bucketName}/${key}`;
  } catch {
    return null;
  }
};

export async function POST(request) {
  const cookieStore = cookies();
  const token = cookieStore.get('portfolio_admin_session')?.value;

  if (!(await requireAdminSession(token))) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get('file');
    const folder = formData.get('folder') || 'uploads';

    if (!(file instanceof File)) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const accessKeyId = process.env.S3_ACCESS_KEY_ID;
    const secretAccessKey = process.env.S3_SECRET_ACCESS_KEY;
    const bucketName = process.env.S3_BUCKET_NAME;
    const endpoint = process.env.S3_ENDPOINT;
    const region = process.env.S3_REGION || 'ap-southeast-2';

    if (!accessKeyId || !secretAccessKey || !bucketName || !endpoint) {
      return NextResponse.json({ error: 'Missing S3 configuration' }, { status: 500 });
    }

    const normalizedEndpoint = endpoint.includes('/storage/v1/s3')
      ? endpoint
      : `${endpoint.replace(/\/$/, '')}/storage/v1/s3`;

    const fileExtension = file.name.includes('.') ? file.name.split('.').pop() : 'jpg';
    const key = `${folder}/${Date.now()}-${Math.random().toString(36).slice(2)}.${fileExtension}`;
    const fileBuffer = Buffer.from(await file.arrayBuffer());

    const s3Client = new S3Client({
      region,
      endpoint: normalizedEndpoint,
      credentials: {
        accessKeyId,
        secretAccessKey,
      },
      forcePathStyle: true,
    });

    await s3Client.send(
      new PutObjectCommand({
        Bucket: bucketName,
        Key: key,
        Body: fileBuffer,
        ContentType: file.type || 'application/octet-stream',
        ACL: 'public-read',
      }),
    );

    const url = getStorageUrlFromSupabase(process.env.NEXT_PUBLIC_SUPABASE_URL, bucketName, key)
      || getStorageUrlFromEndpoint(normalizedEndpoint, bucketName, key);

    return NextResponse.json({ success: true, url });
  } catch (error) {
    console.error('S3 upload failed:', error);
    return NextResponse.json({ error: 'Failed to upload image' }, { status: 500 });
  }
}
