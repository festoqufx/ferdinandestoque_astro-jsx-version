# Astro Project Setup Guide

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Development Server
```bash
npm run dev
```
Navigate to `http://localhost:3000` in your browser.

### 3. Build for Production
```bash
npm run build
```
This creates optimized files in the `dist` folder.

## Project Overview

Your Astro portfolio has been successfully converted from the original HTML! Here's what's included:

### Key Changes from HTML Version:
- ✅ Converted to Astro component architecture
- ✅ Organized into reusable components (Header, Footer, sections)
- ✅ All existing CSS, JS, and images preserved in public folder
- ✅ Bootstrap 5 fully integrated
- ✅ All animations and effects maintained

### File Structure Explained:

```
src/
├── components/          # Reusable page sections
│   ├── Header.astro     # Navigation header
│   ├── Footer.astro     # Footer with social links
│   ├── About.astro      # About me section
│   ├── Experience.astro # Professional timeline
│   ├── Services.astro   # Service offerings
│   └── Contact.astro    # Contact form & info
│
├── layouts/
│   └── Layout.astro     # Main page template
│
└── pages/
    └── index.astro      # Home page (uses components)

public/
├── assets/              # CSS, JS vendor files
│   ├── css/
│   ├── js/
│   ├── vendor/
│   └── img/
├── img/                 # Images
└── figma/               # Figma designs
```

## Important Files

- **astro.config.mjs** - Astro configuration
- **package.json** - Project dependencies and scripts
- **tsconfig.json** - TypeScript settings

## Features Included

✅ Responsive Bootstrap grid  
✅ Hero carousel with 3D effects  
✅ About section with animations  
✅ Experience timeline  
✅ Skills display  
✅ Portfolio gallery  
✅ Service cards  
✅ Contact form  
✅ Footer with social links  
✅ Google Analytics integration  
✅ Mobile navigation toggle  
✅ Back-to-top button  

## Customization

### Update Navigation
Edit `src/components/Header.astro` to add/remove menu items.

### Change Colors & Styles
Modify `public/assets/css/style.css` for theme colors.

### Update Content
Each section is its own component. Edit the `.astro` file in `src/components/` to change content.

### Add Images
Place images in `public/assets/img/` or `public/img/` and reference them with `/img/...` paths.

## Deploying

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload dist folder to Netlify
```

### GitHub Pages
1. Build: `npm run build`
2. Push `dist` folder to `gh-pages` branch

## Need Help?

- Astro Docs: https://docs.astro.build
- Project Folder: `d:\COPILOT\ferdinandestouque.com\Astro version`
- All original assets preserved in `public/` folder
