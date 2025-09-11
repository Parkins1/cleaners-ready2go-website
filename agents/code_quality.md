# Code Quality Guidelines

## Purpose
This file defines standards for linting, error handling, and refactoring patterns to maintain high code quality, readability, and maintainability in the Cleaners Ready 2 Go website project.

## Overview
Consistent code quality ensures the full-stack application (React frontend, Node.js backend) is robust, scalable, and easy to collaborate on. Enforce these via pre-commit hooks (Husky) and CI/CD pipelines (e.g., GitHub Actions). Use TypeScript for type safety where possible.

## Linting Rules
- **ESLint for JavaScript/TypeScript**: Configure with `@eslint/js`, `eslint-plugin-react`, `eslint-plugin-import`. Enforce rules like no-unused-vars, prefer-const, and React-specific (e.g., jsx-uses-react).
  - Example .eslintrc.js:
    ```
    module.exports = {
      extends: ['eslint:recommended', 'plugin:react/recommended'],
      rules: {
        'no-console': 'warn',
        'react/prop-types': 'off' // If using TypeScript
      },
      parser: '@typescript-eslint/parser'
    };
    ```
  - Run: `eslint src/ --fix` before commits.
- **Stylelint for CSS/Tailwind**: Use `stylelint-config-standard` with Tailwind plugin. Rules: no-empty-source, declaration-block-single-line-max-declarations.
  - Integrate in VS Code with extensions.
- **Prettier for Formatting**: Auto-format on save. Config: singleQuote: true, trailingComma: 'es5'.
- **Enforcement**: Block merges if lint fails; use lint-staged for staged files.

## Error Handling
- **Try-Catch Blocks**: Wrap async operations and potential failure points (e.g., API calls, DB queries).
  - Frontend: Use try-catch in useEffect or event handlers; show user-friendly messages with toasts (e.g., react-hot-toast).
  - Backend: Global Express error handler middleware at the end of app.js:
    ```
    app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).json({ error: 'Something went wrong!' });
    });
    ```
- **Custom Error Classes**: Define classes like `ValidationError`, `AuthError` extending Error for specific scenarios (e.g., invalid booking date).
- **Logging**: Integrate Winston or Sentry for structured logging. Log errors with context (userId, endpoint).
- **Graceful Degradation**: In frontend, use Error Boundaries for React components to prevent app crashes.
  - Example: `class ErrorBoundary extends React.Component { ... }`
- **Validation**: Use Zod for schema validation on APIs and forms to catch errors early.

## Refactoring Patterns
- **Extract Method/Function**: Break large functions into smaller, single-responsibility ones (e.g., extract booking validation from controller).
- **Component Decomposition**: In React, split complex components (e.g., HeroSection into sub-components for images/text).
- **Repository Pattern**: In backend, abstract DB logic into repositories (e.g., BookingRepository with methods like findByUserId).
- **DRY Principle**: Reuse utilities (e.g., shared validation functions in /lib/); avoid duplication in services.
- **TypeScript Refactoring**: Use interfaces for props/state; refactor to generics for reusable hooks (e.g., useQuery hook).
- **When to Refactor**: Before adding features (e.g., if cyclomatic complexity >10); use SonarQube for metrics.
- **Code Reviews**: Require PRs to follow these patterns; include before/after diffs.

## Project-Specific Considerations
- **Components**: Ensure IconCard and ServiceCard follow consistent prop interfaces and error handling for missing assets.
- **Server Controllers**: Refactor duplicated logic in /server/controllers/ (e.g., common auth checks).
- **Testing Integration**: Write tests for refactored code to verify behavior.
- **Migration**: When refactoring, update related tests and docs; tag with "refactor" in commits.

## References
- ESLint Docs: [eslint.org](https://eslint.org/docs/latest/)
- Clean Code Principles: [refactoring.com](https://refactoring.com/)
- Always include descriptions: "Refactors booking logic for better error handling - Addresses #456".
