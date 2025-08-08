# Korean Portfolio Website

## Overview

This is a personal portfolio website for 조하림 (Jo Harim), a Full Stack Developer and Data Scientist. The application is built with a modern TypeScript-based full-stack architecture, featuring a React frontend with Tailwind CSS styling and an Express.js backend. The portfolio showcases the developer's background in Biomedical Science from UBC, full-stack development training, and AI/ML expertise.

## User Preferences

Preferred communication style: Simple, everyday language.

Personal Information:
- GitHub username: halimcho
- Email: hcho0511@icloud.com
- Status: Ready to be hired (cute hiring-focused message)
- Profile image: KakaoTalk_Photo_2025-08-08-19-04-56_1754647699856.jpeg
- Soft skills to highlight: English Fluent, Responsibility, Adaptation
- Language support: Korean/English toggle functionality
- Kakao Map API key: efe45bd0fb232c98afd3a547dc360d84

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing
- **Build Tool**: Vite for development and production builds
- **UI Components**: Radix UI primitives with custom styling

The frontend follows a modern component-based architecture with reusable UI components. The design system uses CSS variables for theming with a dark color scheme. The application is structured as a single-page portfolio with smooth scrolling navigation between sections.

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API endpoints
- **Request Handling**: JSON body parsing and URL encoding support
- **Development**: Custom middleware for request logging and error handling

The server implements a clean separation between routing logic and business logic, with centralized error handling and request/response logging for debugging.

### Data Storage Solutions
- **Database**: PostgreSQL with Drizzle ORM
- **Schema Definition**: Type-safe database schemas using Drizzle
- **Migration System**: Drizzle Kit for database migrations
- **In-Memory Fallback**: Memory storage implementation for development/testing
- **Connection**: Neon Database serverless PostgreSQL

The data layer uses Drizzle ORM for type-safe database operations with support for both in-memory storage (for development) and PostgreSQL (for production). The schema includes tables for users, contacts, and GitHub repository data.

### Authentication and Authorization
The application currently implements a basic user system with username/password authentication. User data is stored with UUID primary keys and unique username constraints.

### External Service Integrations
- **GitHub API**: Integration for fetching and displaying repository data
- **Geolocation Services**: Browser geolocation API with BigDataCloud reverse geocoding fallback
- **Contact Form**: Server-side contact form handling with validation
- **Environment Configuration**: Support for GitHub tokens and API keys

The GitHub integration fetches the latest repositories and stores them locally, with proper error handling and loading states. The contact system allows visitors to send messages through a form with validation.

### Development and Build Process
- **Development Server**: Vite dev server with HMR and error overlay
- **Production Build**: Vite for frontend, esbuild for backend bundling
- **Type Checking**: TypeScript compilation checking
- **Database Operations**: Drizzle push for schema synchronization
- **Asset Handling**: Static file serving and asset optimization

The build system supports both development and production environments with proper bundling, optimization, and deployment preparation.

## External Dependencies

- **Database**: Neon Database (PostgreSQL serverless)
- **GitHub API**: For repository data fetching
- **Geolocation APIs**: Browser geolocation and BigDataCloud reverse geocoding
- **Font Services**: Google Fonts (Inter font family)
- **Replit Platform**: Development environment integration with cartographer and error modal plugins
- **UI Framework**: Radix UI primitives for accessible components
- **Validation**: Zod for runtime type validation
- **Query Management**: TanStack Query for data fetching and caching