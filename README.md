# Chiara Coletta - Portfolio

A personal portfolio website showcasing skills, projects, and certifications. Built with Vue 3, TypeScript, and Tailwind CSS.

🌐 **Live Site**: [https://chiara-coletta.com/](https://chiara-coletta.com/)

## 🚀 Features

- ✅ Vue 3 with Composition API
- ✅ TypeScript for type safety
- ✅ Tailwind CSS v4
- ✅ Font Awesome icons (Solid, Regular, Brands)
- ✅ Vue Router with SPA navigation
- ✅ Responsive design
- ✅ Dark/Light theme support
- ✅ Project showcase with modal views
- ✅ Skills and certifications display
- ✅ Custom domain deployment

## 📦 Installation

```bash
npm install
```

## 🛠️ Development

Start the development server:

```bash
npm run dev
```

The app will be available at [http://localhost:5173/](http://localhost:5173/)

## 🏗️ Build

Build for production:

```bash
npm run build
```

## 👀 Preview

Preview the production build locally:

```bash
npm run preview
```

## 🌐 Deployment

This portfolio is deployed at [chiara-coletta.com](https://chiara-coletta.com/) using GitHub Pages with a custom domain.

### Deploy Updates

To deploy changes:

```bash
npm run deploy
```

The site will be updated in 1-2 minutes.

### Custom Domain Setup

The site uses a custom domain configured through:
1. DNS settings pointing to GitHub Pages
2. Base path set to `/` in `.env.production`
3. GitHub Pages configured to serve from `gh-pages` branch

For detailed deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md).

## 📂 Project Structure

```
├── public/              # Static assets
│   ├── doodles/         # Decorative graphics
│   ├── files/           # PDFs (certifications, resume) and SQL files
│   ├── icons/           # Icon assets
│   ├── images/          # Project and other images
│   └── stickers/        # Sticker graphics
├── src/
│   ├── assets/          # 404.html for SPA routing
│   ├── components/      # Reusable Vue components
│   │   ├── Hero.vue
│   │   ├── Skills.vue
│   │   ├── ProjectCard.vue
│   │   ├── Certifications.vue
│   │   └── ...
│   ├── composables/     # Vue composables (theme, utils)
│   ├── constants/       # Project data, skills, certifications
│   ├── router/          # Vue Router configuration
│   ├── views/           # Page components (Home, About, Projects, 404)
│   ├── App.vue          # Root component
│   ├── main.ts          # Application entry point
│   └── style.css        # Global styles
├── .env.production      # Production environment variables
├── DEPLOYMENT.md        # Deployment guide
└── vite.config.ts       # Vite configuration
```

## 🎨 Using Tailwind CSS

Tailwind utility classes can be used directly in your Vue components:

```vue
<div class="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600 transition-colors">
  Hello Tailwind!
</div>
```

## 🎭 Using Font Awesome Icons

Icons are configured in [src/main.ts](src/main.ts).

**1. Import the icon:**
```typescript
import { faHeart } from '@fortawesome/free-solid-svg-icons'
```

**2. Add to library:**
```typescript
library.add(faHeart)
```

**3. Use in components:**
```vue
<font-awesome-icon icon="heart" class="text-red-500" />
```

**Available packages:**
- `@fortawesome/free-solid-svg-icons` - Solid icons
- `@fortawesome/free-regular-svg-icons` - Regular icons
- `@fortawesome/free-brands-svg-icons` - Brand icons

## 🔄 Using as a Scaffold

This portfolio can be used as a template for your own projects:

### Option 1: GitHub Fork
1. Fork this repository
2. Update content in `src/constants/` with your own data
3. Replace assets in `public/` with your own
4. Update `.env.production` for your deployment

### Option 2: Clone & Customize
```bash
git clone https://github.com/your-username/ma-portfolio-notion my-portfolio
cd my-portfolio
npm install
npm run dev
```

Then customize:
- Project data in `src/constants/projects.ts`
- Skills in `src/constants/skills.ts`
- Certifications in `src/constants/certifications.ts`
- Personal info in components
