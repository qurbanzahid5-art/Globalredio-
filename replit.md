# Overview

A vintage-themed radio streaming application that allows users to listen to live radio stations from around the world. The app features a nostalgic radio interface with interactive controls including a tuning dial, volume knob, power button, and station browser. Users can browse stations by country, view station details, and enjoy a realistic vintage radio experience with authentic styling and animations.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript for type safety and better development experience
- **Styling**: Tailwind CSS with custom vintage-themed color palette and shadcn/ui components for consistent UI
- **State Management**: React hooks for local state management with custom hooks for radio functionality
- **Routing**: Wouter for lightweight client-side routing
- **Data Fetching**: TanStack Query for API state management with automatic caching and error handling

## Backend Architecture
- **Server Framework**: Express.js with TypeScript running on Node.js
- **Development Setup**: Vite for hot module replacement and development server proxy
- **Database ORM**: Drizzle ORM configured for PostgreSQL with type-safe database operations
- **Session Management**: Basic user schema defined but authentication not fully implemented
- **API Design**: RESTful endpoints with structured error handling and logging middleware

## Component Structure
- **Radio Components**: Modular components for vintage radio interface (VintageRadio, RadioControls, TuningDial, StationList)
- **UI Components**: shadcn/ui component library for consistent design system
- **Custom Hooks**: useRadioPlayer for audio playback state, useRadioStations for API data fetching
- **Layout**: Single-page application with radio interface as the main view

## Data Storage
- **Database**: PostgreSQL configured through Drizzle ORM with migration support
- **Schema**: User table defined with username/password fields for future authentication
- **Caching**: In-memory storage implementation for development with interface for future database integration
- **Session Storage**: Prepared for PostgreSQL session storage using connect-pg-simple

## Audio Streaming
- **HTML5 Audio**: Native audio element for streaming radio stations
- **Station Management**: Real-time station selection and playback control
- **Volume Control**: Interactive volume knob with visual feedback
- **Loading States**: User feedback during station loading and connection

# External Dependencies

## Radio Data API
- **Radio Browser API**: Public API for fetching global radio station data
- **Endpoints**: Country-based and language-based station filtering
- **Features**: Station metadata, streaming URLs, country codes, and popularity metrics
- **Headers**: Custom User-Agent for API identification

## Database Services
- **Neon Database**: Serverless PostgreSQL database service
- **Connection**: Environment-based database URL configuration
- **Migrations**: Drizzle Kit for database schema management

## Development Tools
- **Vite**: Build tool and development server with React plugin
- **ESBuild**: Fast JavaScript bundler for production builds
- **TypeScript**: Type checking and enhanced development experience
- **Replit Integration**: Development environment integration with error modal and cartographer plugins

## UI and Styling
- **Radix UI**: Headless UI components for accessibility and functionality
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Google Fonts**: Typography with Orbitron, Roboto Slab, and Fredoka One fonts
- **Lucide React**: Icon library for consistent iconography

## State and Data Management
- **TanStack Query**: Server state management with caching and synchronization
- **React Hook Form**: Form handling with validation support
- **Zod**: Schema validation for form inputs and API responses