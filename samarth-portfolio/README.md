# samarth-portfolio

A modern portfolio website built with React, Tailwind CSS, and shadcn UI components.

## Overview

This is a polished portfolio page showcasing:
- CA (Chartered Accountant) credentials and fintech expertise
- Featured projects including SkilledCA
- Technical and professional toolkit
- Journey timeline and professional evolution
- Contact and social links

## Tech Stack

- **React 18** — UI framework
- **Vite** — Fast build tool
- **Tailwind CSS** — Utility-first styling
- **shadcn/ui** — Component library built on Radix UI
- **Lucide React** — Icon library

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Configuration

- **Vite** — see `vite.config.js`
- **Tailwind** — see `tailwind.config.js`
- **shadcn** — see `components.json`

## Project Structure

```
src/
├── components/
│   ├── ui/          # shadcn-style primitives
│   ├── header.jsx
│   └── footer.jsx
├── pages/
│   └── portfolio.jsx # Main portfolio page
├── lib/
│   └── utils.js     # Utility functions
├── App.jsx
├── main.jsx
└── index.css
```

## Custom Components

- **Button** — CTA and action buttons with size and variant options
- **Card** — Content containers with header, content, and footer sections
- **Badge** — Labels and tags for skills and project categories
- **Avatar** — Profile images (optional, uses Radix UI)

## Styling

The portfolio uses a dark theme with:
- Slate-950 background
- Cyan accents (primary color)
- Glassmorphism effects (backdrop blur + transparency)
- Gradient overlays for visual interest

## Deployment

Deploy to Vercel, Netlify, or any static host:

```bash
npm run build
```

The output will be in the `dist/` folder.

## License

© 2025 Samarth. All rights reserved.
