import type { APIRoute } from 'astro';
import { readdirSync } from 'node:fs';
import path from 'node:path';

const allowedExtensions = [
  '.jpg', '.jpeg', '.png', '.webp', '.avif', // Images
  '.mp4', '.webm', '.ogg', '.mov' // Videos
];

function getMediaFiles(directory: string): string[] {
  const publicDir = path.resolve(process.cwd(), 'public');
  const mediaDir = path.join(publicDir, directory);

  try {
    const files = readdirSync(mediaDir);
    return files.filter(file =>
      allowedExtensions.some(ext => file.toLowerCase().endsWith(ext))
    );
  } catch (e) {
    console.warn(`Directory not found or unreadable: ${mediaDir}. Error: ${e.message}`);
    return [];
  }
}

export const GET: APIRoute = () => {
  const memoryLaneFiles = getMediaFiles('memoryLane');
  const memoLaneFiles = getMediaFiles('memoLane'); // For typo-safety

  const allFiles = [...new Set([...memoryLaneFiles, ...memoLaneFiles])];

  return new Response(JSON.stringify(allFiles), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    },
  });
};
