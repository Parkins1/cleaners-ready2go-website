# Authentication Guidelines

## Purpose
This file outlines rules for handling authentication in the Cleaners Ready2Go website project to ensure secure user sessions, API access, and data protection for features like booking cleaning services and user accounts.

## Overview
Authentication is primarily managed on the server-side using JWT (JSON Web Tokens) for stateless API authentication. The project uses Node.js/Express for the backend, with potential integration of OAuth for third-party logins (e.g., Google for customer sign-up). All auth-related code should prioritize security, following OWASP guidelines.

## JWT Handling Rules
- **Token Generation**: Use `jsonwebtoken` library to sign tokens with a strong secret (stored in environment variables, e.g., `JWT_SECRET`). Include user ID, role (customer/admin), and expiration (access: 15min, refresh: 7 days).
  - Example: `const token = jwt.sign({ userId: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '15m' });`
- **Token Storage**: Store access tokens in HTTP-only, secure cookies to prevent XSS. Refresh tokens in a secure database table (e.g., via Prisma model `RefreshToken` with hashed values).
- **Token Validation**: Middleware for protected routes (e.g., booking APIs in `/api/bookings`). Verify token signature and expiration before granting access.
  - Example middleware:
    ```
    const authenticateJWT = (req, res, next) => {
      const token = req.cookies.accessToken;
      if (!token) return res.status(401).json({ error: 'Access denied' });
      jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ error: 'Invalid token' });
        req.user = user;
        next();
      });
    };
    ```
- **Token Refresh**: Implement a `/api/auth/refresh` endpoint that issues new access tokens using valid refresh tokens. Rotate refresh tokens on use and invalidate old ones.
- **Logout**: Clear cookies and blacklist refresh tokens (store in Redis or DB for short-term invalidation).

## OAuth Flows
- **Provider Integration**: Use `passport.js` for OAuth2 flows (e.g., Google OAuth for customer registration).
  - Strategy: `passport-google-oauth20`.
  - Flow: Redirect to provider, callback to `/api/auth/google/callback`, generate JWT on success.
- **Rules**: Store minimal user data (email, name); link to existing accounts if email matches. Use environment variables for client ID/secret.

## Security Best Practices
- **Password Handling**: Use `bcrypt` for hashing passwords (min 12 rounds). Never store plain text.
- **Rate Limiting**: Apply rate limits to login endpoints using `express-rate-limit` to prevent brute-force attacks.
- **HTTPS Only**: Enforce HTTPS in production; use `helmet` middleware for security headers.
- **Error Handling**: Do not expose sensitive info in errors (e.g., "Invalid credentials" instead of "User not found"). Log auth failures securely.
- **Role-Based Access**: Customers can book/view; admins can manage services/users. Check `req.user.role` in middleware.
- **Session Management**: No server-side sessions; rely on JWT for scalability.

## Project-Specific Considerations
- **Booking APIs**: Protect `/api/bookings` with JWT; ensure authenticated users can only book for their account.
- **Admin Panel**: Separate admin routes under `/api/admin` with role checks.
- **Database Integration**: Store users in a `User` model (Prisma schema); include fields like email, hashedPassword, role.

## References
- OWASP Authentication Cheat Sheet: [owasp.org](https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html)
- Always reference issues, e.g., "Implements JWT refresh - Addresses #123".