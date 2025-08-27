#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { gzipSync } from 'zlib';

const root = path.resolve(process.cwd());
const distDir = path.join(root, 'dist', 'public');
const budgetPath = path.join(root, 'performance-budget.json');

function kb(n) { return (n / 1024).toFixed(2); }

function readFileSafe(p) {
  try { return fs.readFileSync(p); } catch { return null; }
}

function getInitialAssets(indexHtml) {
  const html = indexHtml.toString('utf8');
  const scripts = [];
  const styles = [];
  const linkRe = /<link\s+[^>]*rel=["']stylesheet["'][^>]*href=["']([^"']+)["'][^>]*>/gi;
  const scriptRe = /<script\s+[^>]*src=["']([^"']+)["'][^>]*><\/script>/gi;
  let m;
  while ((m = linkRe.exec(html))) styles.push(m[1]);
  while ((m = scriptRe.exec(html))) scripts.push(m[1]);
  return { scripts, styles };
}

function sumSizes(files) {
  let raw = 0, gz = 0;
  for (const rel of files) {
    const abs = path.join(distDir, rel.replace(/^\//, ''));
    const buf = readFileSafe(abs);
    if (!buf) continue;
    raw += buf.byteLength;
    try { gz += gzipSync(buf).byteLength; } catch { /* noop */ }
  }
  return { raw, gz };
}

function main() {
  const budget = JSON.parse(fs.readFileSync(budgetPath, 'utf8'));
  const entry = budget.budgets.find(b => b.path === '/');
  const docBudgetKB = entry.resourceSizes.find(r => r.resourceType === 'document')?.budget ?? 20;
  const jsBudgetKB = entry.resourceSizes.find(r => r.resourceType === 'script')?.budget ?? 150;
  const cssBudgetKB = entry.resourceSizes.find(r => r.resourceType === 'stylesheet')?.budget ?? 50;

  const indexPath = path.join(distDir, 'index.html');
  const indexBuf = fs.readFileSync(indexPath);
  const { scripts, styles } = getInitialAssets(indexBuf);

  const docSize = indexBuf.byteLength;
  const jsSizes = sumSizes(scripts);
  const cssSizes = sumSizes(styles);

  const results = [
    { type: 'document', raw: docSize, budget: docBudgetKB * 1024 },
    { type: 'script', raw: jsSizes.raw, budget: jsBudgetKB * 1024 },
    { type: 'stylesheet', raw: cssSizes.raw, budget: cssBudgetKB * 1024 },
  ];

  let ok = true;
  console.log('Performance Budget Check (raw bytes):');
  for (const r of results) {
    const pass = r.raw <= r.budget;
    ok = ok && pass;
    console.log(`- ${r.type}: ${kb(r.raw)} KB (budget ${r.budget/1024} KB) ${pass ? 'OK' : 'FAIL'}`);
  }

  console.log('\nGzipped sizes (informational):');
  console.log(`- script (gz): ${kb(jsSizes.gz)} KB`);
  console.log(`- stylesheet (gz): ${kb(cssSizes.gz)} KB`);

  if (!ok) {
    console.error('\nBudget FAILED. Consider further code-splitting or trimming initial CSS/JS.');
    process.exit(1);
  } else {
    console.log('\nBudget PASSED.');
  }
}

main();

