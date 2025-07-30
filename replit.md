# Cleaners Ready 2Go - Professional Cleaning Services Website

## Overview

This is a professional cleaning services website built for "Cleaners Ready 2Go," a cleaning company serving Spokane Valley, Liberty Lake, and Greenacres. The application is a full-stack web solution with a React frontend and Express.js backend, designed to showcase services and handle customer inquiries, bookings, and quote requests.

**Status**: Client presentation completed January 2025. Server kept offline unless needed for development.

## User Preferences

Preferred communication style: Simple, everyday language.

## Brand Guidelines (Updated January 2025)

### Color Palette
- **Primary**: #101820 (Dark navy blue)
- **Secondary**: #CFAE51 (Gold)
- **Neutral**: #F5F4F0 (Light cream)
- **Accent**: #747879 (Gray)
- **White**: #FFFFFF

### Typography
- **Headings**: Playfair Display (elegant serif for headlines and logo)
- **Body Text**: Montserrat (clean sans-serif for content)
- **UI Elements**: Inter (modern sans-serif for buttons, forms, navigation)

## System Architecture

The application follows a modern full-stack architecture with clear separation between frontend and backend concerns:

- **Frontend**: React-based single-page application with TypeScript
- **Backend**: Express.js REST API server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM (configured but currently using in-memory storage)
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Build System**: Vite for frontend bundling and development
- **Deployment**: Node.js production build with static file serving

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack React Query for server state management
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom brand colors (gold, black, gray theme)
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database Layer**: Drizzle ORM configured for PostgreSQL
- **Storage**: Currently implements in-memory storage (MemStorage class) as fallback
- **API Design**: RESTful endpoints for contacts, bookings, and quotes
- **Validation**: Zod schemas for request validation
- **Development**: Hot reload with Vite integration in development mode

### Data Models
Three main entities defined in the shared schema:
- **Contacts**: Customer contact form submissions (name, email, phone, service type, message)
- **Bookings**: Service booking requests (service type, preferred date, phone)
- **Quotes**: Quote requests (home size, service frequency, email)

## Data Flow

1. **Client Interactions**: Users interact with React components for contact forms, booking modals, and quote requests
2. **Form Submission**: Forms use React Hook Form with Zod validation before submission
3. **API Requests**: TanStack React Query handles HTTP requests to Express API endpoints
4. **Server Processing**: Express routes validate data using Zod schemas and call storage methods
5. **Data Persistence**: Currently uses in-memory storage, but configured for PostgreSQL via Drizzle
6. **Response Handling**: Success/error responses trigger toast notifications in the UI

## External Dependencies

### Core Runtime Dependencies
- **@neondatabase/serverless**: PostgreSQL client for Neon database
- **drizzle-orm**: Database ORM and query builder
- **@tanstack/react-query**: Server state management
- **wouter**: Lightweight React router
- **zod**: Schema validation library
- **express**: Web framework for Node.js

### UI and Styling
- **@radix-ui/react-***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library
- **class-variance-authority**: Component variant management

### Development Tools
- **vite**: Build tool and development server
- **typescript**: Type checking and compilation
- **drizzle-kit**: Database migrations and schema management

## Deployment Strategy

### Development Mode
- Vite development server for frontend with hot module replacement
- Express server with automatic restart via tsx
- Database schema push via `drizzle-kit push`
- Integrated error overlay for debugging

### Production Build
- Frontend built to static files via Vite
- Backend bundled with esbuild for Node.js runtime
- Static file serving integrated into Express server
- Environment-based configuration for database connections

### Database Strategy
- Drizzle ORM configured for PostgreSQL with migrations support
- In-memory storage fallback for development/testing
- Schema defined in shared TypeScript files for type safety
- Database URL configuration via environment variables

The application is designed to be deployed on platforms like Replit, with support for both development and production environments. The modular architecture allows for easy scaling and maintenance while providing a professional user experience for the cleaning service business.