# Testing Guidelines

## Purpose
This file specifies testing protocols for the Cleaners Ready 2 Go website, emphasizing unit and integration tests with Jest, aiming for 100% coverage on critical paths like authentication and booking flows to ensure reliability.

## Overview
Testing is integral for the React/Node.js stack. Use Jest as the primary framework for unit and integration tests, React Testing Library for frontend components, and Supertest for backend APIs. Run tests in CI/CD (e.g., GitHub Actions) and require passing tests for PR merges. Target 80%+ overall coverage, 100% for critical paths (auth, bookings).

## Unit Tests
- **Frontend (React)**: Test individual components and hooks with Jest + React Testing Library (RTL). Focus on rendering, user interactions, and state changes.
  - Example for ServiceCard:
    ```
    import { render, screen } from '@testing-library/react';
    import ServiceCard from './ServiceCard';

    test('renders service name and price', () => {
      render(<ServiceCard name="Deep Clean" price={150} />);
      expect(screen.getByText('Deep Clean')).toBeInTheDocument();
      expect(screen.getByText('$150')).toBeInTheDocument();
    });
    ```
  - Use `userEvent` for simulating clicks/inputs; mock hooks like useState.
- **Backend (Node.js)**: Test functions/services in isolation (e.g., validation logic, utility functions).
  - Example for auth utility:
    ```
    import { validateToken } from '../utils/auth';
    import jwt from 'jsonwebtoken';

    jest.mock('jsonwebtoken');
    test('validateToken returns user on valid token', () => {
      jwt.verify.mockReturnValue({ userId: '123' });
      expect(validateToken('valid')).toEqual({ userId: '123' });
    });
    ```
  - Mock dependencies (DB, external APIs) with `jest.mock`.

## Integration Tests
- **API Endpoints**: Use Supertest to test full request-response cycles with mocked DB (Prisma in-memory).
  - Example for booking creation:
    ```
    import request from 'supertest';
    import app from '../../server/app';
    import { PrismaClient } from '@prisma/client';

    const prisma = new PrismaClient();

    test('POST /api/bookings creates booking', async () => {
      const res = await request(app)
        .post('/api/bookings')
        .send({ serviceId: '1', date: '2024-01-01' })
        .expect(201);
      expect(res.body.id).toBeDefined();
    });
    ```
  - Test auth-protected routes with valid/invalid tokens.
- **Database Integration**: Use Prisma's test DB; seed test data before each test suite.
  - Clean up with `afterEach(async () => { await prisma.booking.deleteMany(); });`
- **Frontend-Backend**: Mock API calls with MSW (Mock Service Worker) in RTL tests for end-to-end-like flows without full server.

## End-to-End (E2E) Tests
- **Tools**: Use Cypress or Playwright for browser-based tests (e.g., full booking flow: login -> select service -> submit form).
  - Example Cypress test:
    ```
    describe('Booking Flow', () => {
      it('books a service successfully', () => {
        cy.visit('/book');
        cy.get('[data-testid=service-select]').select('Deep Clean');
        cy.get('form').submit();
        cy.url().should('include', '/confirmation');
      });
    });
    ```
  - Run in headed mode for debugging; focus on critical user journeys.
- **Accessibility Testing**: Integrate axe-core with Cypress/Jest for a11y checks.

## Coverage and Best Practices
- **Coverage Reports**: Run `jest --coverage` and enforce thresholds in package.json: `"jest": { "coverageThreshold": { "global": { "branches": 80, "functions": 80, "lines": 80 } } }`.
  - Critical paths (auth, booking): 100% coverage.
- **Test Organization**: Place tests alongside source files (e.g., ServiceCard.test.tsx next to ServiceCard.tsx); use __tests__ for utils.
- **Mocking Strategy**: Mock external services (e.g., email sending); use real DB for integration but in-memory for speed.
- **CI/CD Integration**: Add test scripts to package.json: `"test:ci": "jest --watchAll=false --coverage"`.
- **TDD/BDD**: Write tests before code for new features; use describe/it for readable specs.
- **Flakiness**: Seed random data; retry failed tests in CI.

## Project-Specific Considerations
- **Components**: Test IconCard rendering with different icons; mock asset loads.
- **Server Routes**: Integration tests for /api/auth and /api/bookings with various statuses.
- **Edge Cases**: Test booking conflicts, invalid dates, unauth access.
- **Performance in Tests**: Include snapshot tests for UI stability.

## References
- Jest Docs: [jestjs.io](https://jestjs.io/docs/getting-started)
- React Testing Library: [testing-library.com](https://testing-library.com/docs/react-testing-library/intro/)
- Include change notes: "Adds unit tests for auth middleware - Addresses #567".
