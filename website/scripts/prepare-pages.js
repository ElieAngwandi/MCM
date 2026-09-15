import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distClient = path.resolve(__dirname, '../dist/client');

if (!fs.existsSync(distClient)) {
  console.log('[prepare-pages] dist/client does not exist, skipping.');
  process.exit(0);
}

// 1. Ensure .nojekyll exists to prevent GitHub Pages Jekyll from ignoring _next/
fs.writeFileSync(path.join(distClient, '.nojekyll'), '');

function copyDirRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  for (const item of fs.readdirSync(src)) {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);
    if (fs.statSync(srcPath).isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// 2. Mirror _next between dist/client/_next and dist/client/<basePath>/_next (e.g. MCM)
// This ensures assets resolve whether GitHub Pages requests /_next/... or /MCM/_next/...
for (const entry of fs.readdirSync(distClient)) {
  const entryPath = path.join(distClient, entry);
  if (
    fs.statSync(entryPath).isDirectory() &&
    entry !== '_next' &&
    entry !== 'images' &&
    entry !== '.vite'
  ) {
    const subNext = path.join(entryPath, '_next');
    if (fs.existsSync(subNext)) {
      copyDirRecursive(subNext, path.join(distClient, '_next'));
    }
    const rootNext = path.join(distClient, '_next');
    if (fs.existsSync(rootNext)) {
      copyDirRecursive(rootNext, path.join(entryPath, '_next'));
    }
  }
}

console.log('[prepare-pages] GitHub Pages artifact layout prepared successfully.');
