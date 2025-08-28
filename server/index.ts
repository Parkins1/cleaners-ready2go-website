import express, { type Request, Response, NextFunction } from "express";
import { createServer } from "http";
// Explicit .js extensions for Node ESM on Vercel
import { registerRoutes } from "./routes.js";
import { setupVite, serveStatic, log } from "./vite.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Request logging (development only)
if (app.get("env") === "development") {
  app.use((req, res, next) => {
    const start = Date.now();
    const path = req.path;
    let capturedJsonResponse: Record<string, any> | undefined = undefined;

    const originalResJson = res.json;
    res.json = function (bodyJson, ...args) {
      capturedJsonResponse = bodyJson;
      return originalResJson.apply(res, [bodyJson, ...args]);
    } as typeof res.json;

    res.on("finish", () => {
      const duration = Date.now() - start;
      if (path.startsWith("/api")) {
        let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
        if (capturedJsonResponse) {
          logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
        }

        if (logLine.length > 80) {
          logLine = logLine.slice(0, 79) + "…";
        }

        log(logLine);
      }
    });

    next();
  });
}

// Register API routes on the app
registerRoutes(app);

// Global error handler
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ message });
  console.error(err);
});

// In production (including Vercel), serve the prebuilt client from dist/public.
// In local development, attach Vite middleware for HMR.
const isDev = process.env.NODE_ENV !== "production";
const isVercel = Boolean(process.env.VERCEL);

let server = createServer(app);

if (isDev && !isVercel) {
  // Only setup Vite in local development
  await setupVite(app, server);
} else {
  // On Vercel and local production, serve static assets
  serveStatic(app);
}

// Export the Express app for Vercel Serverless.
export default app;

// Only start listening when not running on Vercel (serverless).
if (!isVercel) {
  const port = parseInt(process.env.PORT || "5001", 10);
  server.listen({ port, host: "0.0.0.0" }, () => {
    log(`serving on port ${port}`);
  });
}
