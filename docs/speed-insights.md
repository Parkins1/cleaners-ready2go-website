# Vercel Speed Insights (React + Vite)

This project collects real-user performance data in production via Vercel Speed Insights.

## Install

Run in the project root (same level as vite.config.ts):

npm i -E @vercel/speed-insights@latest

## Code integration

In client/src/main.tsx, add:

import { SpeedInsights } from "@vercel/speed-insights/react";

Then render it near the app root (production-only recommended):

{import.meta.env.PROD && <SpeedInsights />}

Example:
createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
    {import.meta.env.PROD && <SpeedInsights />}
  </HelmetProvider>
);

This ensures metrics are sent only in production builds.

## Deploy and verify

1. Deploy the site to Vercel (production).
2. Drive some real traffic to your deployed domain.
3. In Vercel, open your Project → Speed Insights to view data.
   - Data may take several minutes and requires real production traffic.
   - No environment variables are needed.

## Notes

- Local/dev builds won’t send any data.
- The component is lightweight and non-blocking.
- No extra Vite configuration is required.