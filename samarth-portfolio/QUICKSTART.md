# Getting Started with samarth-portfolio

## Quick Start

### 1. Install Dependencies
```bash
cd samarth-portfolio
npm install
```

### 2. Run Locally
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Build for Production
```bash
npm run build
```
Output goes to `dist/`.

## What's Inside

### Real shadcn Components
This portfolio uses authentic shadcn UI components, not CSS imitations:
- **Button** — with size and variant options
- **Card** — structured content container
- **Badge** — skill and project tags
- **Avatar** — profile images (Radix UI-backed)

### Pages
- **Portfolio** — full-page showcase with hero, projects, skills, timeline, and CTA

### Styling
- Dark theme (slate-950)
- Cyan accents (#06b6d4)
- Glassmorphism effects
- Responsive grid layouts
- Smooth transitions

## Deployment

### Vercel
1. Push to GitHub
2. Connect repo to Vercel
3. Vercel auto-detects Vite and deploys `dist/`

### Other Platforms
Build and upload `dist/` to Netlify, GitHub Pages, or any static host.

## Customization

### Tailwind Colors
Edit `tailwind.config.js` to change the color scheme. The app uses CSS custom properties:
```css
--primary: 190 95% 39%;  /* Cyan */
--secondary: 217.2 32.6% 17.5%;  /* Slate */
```

### Portfolio Content
Edit `src/pages/portfolio.jsx` to update:
- Projects
- Skills
- Timeline
- Social links

### Layout Components
Modify `src/components/header.jsx` and `src/components/footer.jsx` for nav or footer changes.

## Next Steps

1. **Connect a domain** — Deploy to `samarth.skilledca.in` or `samarth.com`
2. **Add authentication** — Integrate SuperTokens if future private sections are needed
3. **Connect CMS** — Wire portfolio content from a headless CMS for dynamic updates
4. **Add analytics** — Use Vercel Analytics or Plausible for insights

## Support

For issues with shadcn components, see [shadcn/ui docs](https://ui.shadcn.com/).
For React/Vite issues, see [Vite docs](https://vitejs.dev/).

---
Built with React, Tailwind CSS, and shadcn UI.
