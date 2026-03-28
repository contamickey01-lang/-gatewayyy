import type { NextRequest } from 'next/server';

export const dynamic = 'force-static';

export async function GET(_req: NextRequest) {
  const url = 'https://i.imgur.com/LP4zqhW.png';
  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok || !res.body) {
    return new Response(null, { status: 404 });
  }
  return new Response(res.body, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
