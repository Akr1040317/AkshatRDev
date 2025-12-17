# Akshat Rastogi - Portfolio Website

A modern, premium personal portfolio website built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- **Dark Theme** with pink, purple, and blue accents
- **Animated Backgrounds**: Aurora mesh gradients, particle field, and noise overlay
- **Responsive Design**: Desktop sidebar navigation and mobile bottom navigation
- **Command Palette**: Cmd+K to quickly navigate and perform actions
- **Smooth Animations**: Framer Motion for transitions and micro-interactions
- **Data-Driven**: Content managed through TypeScript data files

## Tech Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- tsparticles (react-tsparticles)
- Lucide React (icons)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with background system
│   ├── page.tsx          # Main page with module routing
│   └── globals.css       # Theme tokens and utility classes
├── components/
│   ├── AuroraBackground.tsx
│   ├── ParticlesBackground.tsx
│   ├── SidebarNav.tsx
│   ├── BottomNav.tsx
│   ├── CommandPalette.tsx
│   ├── OverviewPanel.tsx
│   ├── ProjectGallery.tsx
│   ├── ProjectDrawer.tsx
│   ├── ExperienceTimeline.tsx
│   ├── LeadershipPanel.tsx
│   └── ContactPanel.tsx
└── data/
    ├── projects.ts        # Project data
    └── experience.ts      # Experience data
```

## Customization

Edit the data files to update content:
- `data/projects.ts` - Add or modify projects
- `data/experience.ts` - Update experience entries

Theme colors can be adjusted in `app/globals.css` via CSS variables.

## Build

```bash
npm run build
npm start
```

## License

MIT

