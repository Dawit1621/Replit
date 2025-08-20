# Overview

This is a modern full-stack portfolio website built with React and Express.js. The application showcases a developer's projects and provides contact functionality. It features a clean, professional design with animations and dark/light theme support.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The frontend is built with React 18 using TypeScript and modern development patterns:

- **Component Architecture**: Functional components with hooks-based state management
- **Styling**: Tailwind CSS with custom design system using CSS variables for theming
- **UI Components**: Comprehensive component library using Radix UI primitives with shadcn/ui styling
- **Routing**: Client-side routing implemented with Wouter (lightweight React router)
- **State Management**: TanStack Query for server state management and caching
- **Forms**: React Hook Form with Zod validation for type-safe form handling
- **Animations**: Framer Motion for smooth animations and transitions
- **Theme System**: Custom theme provider supporting light/dark modes with localStorage persistence

## Backend Architecture

The backend follows RESTful API principles with Express.js:

- **Framework**: Express.js with TypeScript for type safety
- **Database Access**: Drizzle ORM for type-safe database operations
- **API Design**: RESTful endpoints with proper HTTP status codes and error handling
- **Validation**: Zod schemas for request validation with detailed error messages
- **Storage Pattern**: Repository pattern with DatabaseStorage class for data access abstraction

## Database Schema

PostgreSQL database with three main entities:

- **Users**: Basic user authentication structure with username/password
- **Projects**: Portfolio projects with tech stack, URLs, and metadata
- **Contact Messages**: Contact form submissions with timestamps

All tables use UUID primary keys and include proper constraints and indexes.

## Development Tools

- **Build System**: Vite for fast development and optimized production builds
- **Database Migrations**: Drizzle Kit for schema management and migrations
- **Development Server**: Integrated Vite dev server with Express API proxy
- **Type Safety**: Shared TypeScript types between frontend and backend
- **Code Quality**: ESBuild for production bundling with proper error handling

## Deployment Architecture

- **Static Assets**: Frontend builds to static files served by Express
- **API Routes**: Express server handles both API routes and static file serving
- **Database**: PostgreSQL with Neon serverless driver for scalable connections
- **Environment**: Separate development and production configurations

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL database hosting
- **Connection Pooling**: Built-in connection management via Neon's serverless driver

## UI and Styling
- **Radix UI**: Unstyled, accessible component primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library for consistent iconography
- **Google Fonts**: Web fonts (Inter, JetBrains Mono) for typography

## Development and Build Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type checking and compilation
- **ESBuild**: Fast JavaScript bundler for production
- **PostCSS**: CSS processing with Autoprefixer

## Form and Data Management
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form handling with minimal re-renders
- **Zod**: Runtime type validation and schema definition
- **Date-fns**: Date manipulation and formatting utilities

## Animation and Interaction
- **Framer Motion**: Animation library for React components
- **Embla Carousel**: Lightweight carousel/slider component
- **Vaul**: Drawer/modal component for mobile interfaces

The application is designed to be easily deployable to platforms like Replit, Vercel, or similar hosting services with minimal configuration changes.