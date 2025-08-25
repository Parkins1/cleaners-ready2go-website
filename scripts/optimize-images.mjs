#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const exts = new Set(['.jpg', '.jpeg', '.png']);
const roots = [
  path.resolve('attached_assets'),
  path.resolve('client/src/assets'),
];

async function* walk(dir) {
  const entries = await fs.promises.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(full);
    } else {
      yield full;
    }
  }
}

async function convertToWebp(file) {
  const ext = path.extname(file).toLowerCase();
  if (!exts.has(ext)) return null;
  const out = file.replace(/\.(jpe?g|png)$/i, '.webp');
  try {
    const input = sharp(file);
    // Preserve metadata and convert
    await input.webp({ quality: 82 }).withMetadata().toFile(out);
    return out;
  } catch (err) {
    console.error(`Failed to convert ${file}:`, err.message);
    return null;
  }
}

async function main() {
  let converted = 0;
  for (const root of roots) {
    if (!fs.existsSync(root)) continue;
    for await (const f of walk(root)) {
      const ext = path.extname(f).toLowerCase();
      if (!exts.has(ext)) continue;
      const out = await convertToWebp(f);
      if (out) {
        converted++;
        console.log(`webp: ${path.relative(process.cwd(), out)}`);
      }
    }
  }
  console.log(`Done. Converted ${converted} images to WebP.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

