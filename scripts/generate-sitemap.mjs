#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const repoRoot = path.resolve(process.cwd());
const routesFile = path.join(repoRoot, 'client', 'src', 'routes.ts');
const siteFile = path.join(repoRoot, 'client', 'src', 'config', 'site.ts');
const outFile = path.join(repoRoot, 'client', 'public', 'sitemap.xml');

function readFile(p) {
  return fs.readFileSync(p, 'utf8');
}

function extractSiteUrl(src) {
  // export const site = { url: "https://..." }
  const m = src.match(/url:\s*"([^"]+)"/);
  if (!m) throw new Error('Could not extract site.url from site.ts');
  return m[1];
}

function extractPaths(src) {
  // naive parse: find path: '...'
  const regex = /path:\s*['"]([^'"\n]+)['"]/g;
  const paths = new Set();
  let m;
  while ((m = regex.exec(src))) {
    const p = m[1];
    // skip catch-all and not-found
    if (p.startsWith('/:') || p.includes('*')) continue;
    paths.add(p);
  }
  // Ensure root path is included
  paths.add('/');
  return Array.from(paths);
}

function buildXml(baseUrl, paths) {
  const now = new Date().toISOString().slice(0, 10);
  const escape = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const loc = (p) => (p === '/' ? baseUrl : `${baseUrl}${p}`);
  const priority = (p) => (p === '/' ? '1.0' : p.split('/').length <= 2 ? '0.8' : '0.7');

  const urls = paths
    .sort((a, b) => (a === '/' ? -1 : b === '/' ? 1 : a.localeCompare(b)))
    .map((p) => `  <url>\n    <loc>${escape(loc(p))}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${priority(p)}</priority>\n  </url>`) 
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    `${urls}\n` +
    `</urlset>\n`;
}

try {
  const routesSrc = readFile(routesFile);
  const siteSrc = readFile(siteFile);
  const baseUrl = extractSiteUrl(siteSrc);
  const paths = extractPaths(routesSrc);
  const xml = buildXml(baseUrl, paths);
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, xml, 'utf8');
  console.log(`Wrote sitemap with ${paths.length} routes to ${outFile}`);
} catch (err) {
  console.error(err);
  process.exit(1);
}

