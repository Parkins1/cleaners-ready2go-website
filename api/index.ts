// Vercel Serverless Function entry that re-exports the Express app
// Keep ESM explicit extension for Vercel Node runtime
import app from "../server/index.js";
export default app;

