# Agents Guidelines Overview

## Purpose
Break down instructions by area to avoid a "one giant file" that's hard to maintain or token-inefficient. This directory provides specialized guidelines for AI agents (modes) working on the Cleaners Ready2Go website project, a full-stack web application for a cleaning service in Spokane, built with React (client-side), Node.js (server-side), and Vite for development.

## Available Agents/Modes
These modes guide how AI agents operate on the project:

### Architect Mode (architect)
- **Purpose**: Planning, designing system architecture, and strategizing features.
- **Responsibilities**: Break down requirements, create technical specifications, design database schemas, and outline component structures.
- **When to Use**: Before implementing new features or refactoring large parts of the codebase.

### Code Mode (code)
- **Purpose**: Writing, modifying, and refactoring code.
- **Responsibilities**: Implement features, fix bugs, create new files, and ensure code follows best practices.
- **When to Use**: For direct code changes, such as updating React components or server endpoints.

### Ask Mode (ask)
- **Purpose**: Providing explanations, documentation, and answers to technical questions.
- **Responsibilities**: Analyze code, recommend technologies, and explain concepts without making changes.
- **When to Use**: When seeking understanding or advice on the codebase or technologies.

### Debug Mode (debug)
- **Purpose**: Troubleshooting issues, investigating errors, and diagnosing problems.
- **Responsibilities**: Add logging, analyze stack traces, identify root causes, and suggest fixes.
- **When to Use**: When encountering bugs, errors, or unexpected behavior.

### Orchestrator Mode (orchestrator)
- **Purpose**: Coordinating complex, multi-step projects across multiple domains.
- **Responsibilities**: Break down tasks into subtasks, manage workflows, and switch between modes as needed.
- **When to Use**: For large-scale updates or integrations involving multiple components.

### Reach Tailwinds Mode (reach-tailwinds)
- **Purpose**: Specialized in React and Tailwind CSS development.
- **Responsibilities**: Build and optimize React components using hooks, state management, and Tailwind for styling.
- **When to Use**: For frontend UI/UX enhancements, component creation, or styling tasks.

## Specialized Guidelines
Refer to the following files for area-specific rules:

- **[auth.md](auth.md)**: Rules for JWT handling, OAuth flows, etc. (e.g., auth.md).
- **[performance.md](performance.md)**: Optimization tips (e.g., lazy loading, caching strategies; performance.md).
- **[code_quality.md](code_quality.md)**: Linting, error handling, and refactoring patterns (e.g., code_quality.md).
- **[data_layer.md](data_layer.md)**: Database schemas, ORM usage (e.g., Prisma queries; data_layer.md).
- **[testing.md](testing.md)**: Unit/integration test requirements (e.g., "Use Jest with 100% coverage for critical paths"; testing.md).
- **[file_conventions.md](file_conventions.md)**: File naming and structure conventions (e.g., "Use PascalCase.tsx for components"; file_conventions.md).
- **[etc.md](etc.md)**: Catch-all for miscellaneous guidelines, such as UI/UX, deployment instructions, or integration rules.

## Folder Structure Example
For complex projects, inspired by news.ycombinator.com:

agents/
├── index.md          # Universal overview
├── auth.md           # Auth-specific rules
├── performance.md    # Optimization guidelines
├── code_quality.md   # Style and best practices
├── data_layer.md     # Backend/DB rules
├── testing.md        # Testing protocols
├── file_conventions.md # Naming and organization rules
└── etc.md            # Catch-all for misc

## Usage Guidelines
- Start tasks in the appropriate mode based on the requirement.
- Use tools like read_file, apply_diff, and browser_action to interact with the codebase and test changes.
- Always follow best practices for web development, ensuring responsiveness, accessibility, and performance.
- When making changes, include clear descriptions and references to related issues (e.g., "Addresses #456").

## Project Structure Summary
- **client/**: React frontend with Vite.
- **server/**: Node.js backend with controllers, services, and repositories.
- **assets/**: Images and icons for services and UI elements.
- **docs/**: Additional documentation.

For mode switches or new mode creation, use the switch_mode or fetch_instructions tools as needed.