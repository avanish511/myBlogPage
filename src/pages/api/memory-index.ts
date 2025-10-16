import { readdirSync, existsSync } from "node:fs";
import path from "node:path";

const IMAGE_EXTS = [".jpg", ".jpeg", ".png", ".webp", ".avif"]; 
const VIDEO_EXTS = [".mp4", ".webm", ".ogg", ".mov"]; 

function listFilesFrom(dirAbs: string): string[] {
  try {
    if (!existsSync(dirAbs)) return [];
    const entries = readdirSync(dirAbs, { withFileTypes: true });
    return entries
      .filter((e) => e.isFile())
      .map((e) => e.name)
      .filter((name) => {
        const ext = path.extname(name).toLowerCase();
        return IMAGE_EXTS.includes(ext) || VIDEO_EXTS.includes(ext);
      });
  } catch {
    return [];
  }
}

export async function GET() {
  const publicDir = path.resolve(process.cwd(), "public");
  const lane1 = path.join(publicDir, "memoryLane");
  const lane2 = path.join(publicDir, "memoLane");

  const a = listFilesFrom(lane1);
  const b = listFilesFrom(lane2);
  const combined = Array.from(new Set([...a, ...b]));

  return new Response(JSON.stringify(combined), {
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}


