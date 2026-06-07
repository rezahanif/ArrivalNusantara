# Arrival Nusantara - Nuxt 3 Migration

This is the Nuxt 3 + Vue 3 version of the Arrival Nusantara project.

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Supabase credentials
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

### Build

```bash
npm run build
```

### Generate Static Site

```bash
npm run generate
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
frontend-nuxt/
├── app/
│   ├── layouts/          # Layout components
│   └── pages/            # Page routes (file-based routing)
├── components/           # Reusable Vue components (auto-imported)
├── composables/          # Vue composables (auto-imported)
├── server/
│   ├── api/              # Nitro API routes
│   ├── middleware/       # Server middleware
│   └── plugins/          # Server plugins
├── middleware/           # Client-side route middleware
├── utils/                # Utility functions
├── utils/data/           # Static data files
├── public/               # Static assets
└── assets/               # Global styles and assets
```

## Key Technologies

- **Nuxt 3**: Vue meta-framework for building web applications
- **Vue 3**: Progressive JavaScript framework
- **TypeScript**: Static type checking
- **Tailwind CSS**: Utility-first CSS framework
- **Supabase**: Backend as a Service (Authentication & Database)
- **Lucide Vue**: Icon library

## Migration Progress

- [x] Phase 1: Setup & Foundation
  - [x] Project structure
  - [x] TypeScript configuration
  - [x] Tailwind CSS setup
  - [x] Supabase composable
  - [x] Middleware setup
  - [x] Environment variables

- [ ] Phase 2: Component Conversion
- [ ] Phase 3: Pages & Routing
- [ ] Phase 4: Data & State
- [ ] Phase 5: Polish & Testing

## Learn More

- [Nuxt 3 Documentation](https://nuxt.com/docs)
- [Vue 3 Documentation](https://vuejs.org/guide/)
- [Tailwind CSS](https://tailwindcss.com)
- [Supabase Documentation](https://supabase.com/docs)
