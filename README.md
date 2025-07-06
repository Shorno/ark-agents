# Ark Lab Agent

## Project Overview
Ark Lab Agent is a web application for managing and viewing agent profiles. It is built with Next.js, TypeScript, and Redux, and uses Drizzle ORM for database interactions.

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- pnpm (or npm/yarn)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Shorno/ark-agents
   cd ark-lab-agent
   ```
2. Install dependencies:
   ```bash
   pnpm install
   # or
   npm install
   ```

### Running the Project Locally
1. Start the development server:
   ```bash
   pnpm dev
   # or
   npm run dev
   ```
2. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables
- Create a `.env` file in the root directory for any required environment variables (e.g., database connection, authentication secrets).

## Key Design Decisions & Challenges
- **Mock Production Environment:** Used artificial dealy (loading state / ui) to make the experience like real live site. With static data it's difficult to give the proper feel of production environment.
- **State Management:** Used Redux Toolkit for predictable and scalable state management.
- **Database:** Chose Drizzle ORM for type-safe database access and migrations.
- **Authentication:** Implemented Google OAuth for simplified authentication experience.

## Google OAuth 2.0 (Optional Challenge)
  - Used `better-atuh` library with neon serverless postgres database with an ORM.
  - No challenges. I have worked with different auth providers and auth library.

## Folder Structure
- `app/` — Main application pages and API routes
- `components/` — Reusable UI and feature components
- `db/` — Database schema and connection
- `store/` — Redux slices and selectors
- `types/` — TypeScript types
- `lib/` — Utility libraries (e.g., authentication, store setup)
