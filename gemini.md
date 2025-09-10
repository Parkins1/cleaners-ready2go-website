# Gemini Assistant Notes

This document is used by the Gemini AI assistant to store notes, log major changes, and outline plans related to this project.

## Best Practices for Working with Gemini

*   **Be specific:** The more detailed your request, the better I can understand and execute it. For UI issues, screenshots or detailed descriptions are very helpful.
*   **One major task at a time:** While I can handle complex requests, breaking down large features or refactors into smaller, sequential steps often leads to better results.
*   **Reference files:** If you know the relevant file(s) for a task, please mention them. It speeds up the process significantly.
*   **Review my plans:** I will often propose a plan before making changes. Please review it to ensure it aligns with your goals.

## Recent Major Changes Log

### September 8, 2025

*   **Increased Global Spacing:**
    *   Increased vertical spacing between sections by updating `--spacing-section` in `styles/tokens.css`.
    *   Increased horizontal padding for all page and component wrappers (e.g., `px-4` -> `px-6`).
    *   Increased the `gap` between items in all grid layouts (e.g., `gap-lg` -> `gap-xl`) to address cramped components like the Service Card grid.

*   **Button Consistency:**
    *   Analyzed all button usages site-wide.
    *   Modified the "See Services" button on the home page to use the `outline` variant to improve visual hierarchy in the hero section.

*   **Bug Fixes:**
    *   **UI:** Fixed an issue where dropdown menus in the "Get a Quote" modal had a transparent background.
    *   **Server:** Resolved a server startup crash by refactoring `server/services/bookingService.ts` to align with the project's repository pattern.

*   **File Generation:**
    *   Created `public/robots.txt` to manage search engine crawling.
    *   Created `public/llms.txt` to provide a content guide for AI models.
