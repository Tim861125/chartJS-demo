# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `bun run dev` - Start development server (Vite)
- `bun run build` - Build for production
- `bun run preview` - Preview production build

## Code Quality and Formatting

- **Biome** is used for linting, formatting and import organization
- Configuration: `biome.json`
- Format settings: 2 spaces, double quotes, 120 line width
- Run Biome with: `npx biome format . --write` and `npx biome check .`

## Architecture Overview

This is a **Vue 3 + Chart.js demo application** showcasing different chart types with a responsive design.

### Tech Stack
- **Vue 3** with Composition API (`<script setup>`)
- **Chart.js** via `vue-chartjs` wrapper for charts
- **Element Plus** UI component library with Chinese (Traditional) locale
- **Vue Router** for navigation between chart views
- **Vite** as build tool and dev server

### Application Structure

**Routing System** (`src/router/index.js`):
- `/` redirects to `/doughnut`
- Routes: `/doughnut`, `/bar`, `/line`, `/area`
- Each route has Chinese meta titles for navigation

**Layout** (`src/App.vue`):
- Responsive design with mobile-first approach
- Collapsible sidebar navigation with overlay on mobile
- Element Plus components with consistent styling
- Breakpoints: mobile (<768px), tablet (576px+), desktop (768px+)

**Chart Components** (`src/components/`):
- `DoughnutChart.vue`, `BarChart.vue`, `LineChart.vue`, `AreaChart.vue`
- Each uses Chart.js registration pattern: `ChartJS.register(...)`
- Responsive sizing with aspect ratio preservation
- Vue-chartjs wrapper components for Chart.js integration

### Development Patterns

**Chart.js Integration**:
- Must register required Chart.js components before use
- Example: `ChartJS.register(Title, Tooltip, Legend, ArcElement)`
- Use vue-chartjs wrapper components (e.g., `Doughnut`, `Bar`)

**Styling Convention**:
- Mobile-first responsive design
- Element Plus theme integration
- Scoped styles in components
- CSS custom properties for theming

**Component Structure**:
- Composition API with `<script setup lang="ts">`
- Element Plus components with explicit imports
- Chart components use consistent sizing and responsive patterns