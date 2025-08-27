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

async function ensureDir(p) {
  await fs.promises.mkdir(path.dirname(p), { recursive: true });
}

async function convertToWebp(file) {
  const ext = path.extname(file).toLowerCase();
  if (!exts.has(ext)) return null;
  const out = file.replace(/\.(jpe?g|png)$/i, '.webp');
  try {
    const input = sharp(file);
    await ensureDir(out);
    // Preserve metadata and convert (baseline single-size webp)
    await input.webp({ quality: 82 }).withMetadata().toFile(out);
    return out;
  } catch (err) {
    console.error(`Failed to convert ${file}:`, err.message);
    return null;
  }
}

function widthsFor(file, meta) {
  const base = path.basename(file).toLowerCase();
  const isIcon = base.startsWith('icon_');
  const maxW = meta.width || 0;
  const iconWidths = [64, 128, 256];
  const photoWidths = [480, 768, 1024, 1400, 1920];
  const candidates = isIcon ? iconWidths : photoWidths;
  return candidates.filter((w) => w <= maxW && w > 0);
}

async function generateVariants(file) {
  const ext = path.extname(file).toLowerCase();
  if (!exts.has(ext)) return { webp: [], avif: [] };
  const base = file.replace(/\.(jpe?g|png)$/i, '');
  try {
    const input = sharp(file);
    const meta = await input.metadata();
    const widths = widthsFor(file, meta);
    const outWebp = [];
    const outAvif = [];
    for (const w of widths) {
      const webpOut = `${base}-${w}.webp`;
      const avifOut = `${base}-${w}.avif`;
      await ensureDir(webpOut);
      await ensureDir(avifOut);
      await sharp(file).resize({ width: w }).webp({ quality: 80 }).toFile(webpOut);
      await sharp(file).resize({ width: w }).avif({ quality: 50 }).toFile(avifOut);
      outWebp.push(webpOut);
      outAvif.push(avifOut);
      console.log(`variant: ${path.relative(process.cwd(), webpOut)} | ${path.relative(process.cwd(), avifOut)}`);
    }
    return { webp: outWebp, avif: outAvif };
  } catch (err) {
    console.error(`Failed to generate variants for ${file}:`, err.message);
    return { webp: [], avif: [] };
  }
}

async function main() {
  let converted = 0;
  let variants = 0;
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
      const v = await generateVariants(f);
      variants += (v.webp.length + v.avif.length);
    }
  }
  console.log(`Done. Converted ${converted} images to WebP. Generated ${variants} responsive variants.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
