# Vue 3 + TypeScript + Tailwind CSS + Font Awesome

A production-ready scaffold for Vue 3 projects with TypeScript, Tailwind CSS v4, Font Awesome icons, and GitHub Pages deployment.

## 🚀 Features

- ✅ Vue 3 with Composition API
- ✅ TypeScript for type safety
- ✅ Tailwind CSS v4 (latest version)
- ✅ Font Awesome icons (Solid, Regular, Brands)
- ✅ Vue Router for navigation
- ✅ Vite for fast development and optimized builds
- ✅ GitHub Pages deployment ready

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

## 🌐 Deploy to GitHub Pages

### First-time Setup

1. **Update the repository name** in two files:

   **`.env.production`**:
   ```
   VITE_SITE_BASE='/your-repo-name'
   ```

   **`src/assets/404.html`** (line 12):
   ```javascript
   window.location.href = 'https://your-username.github.io/your-repo-name/?path=' + pathname
   ```

2. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages**:
   - Go to your repository Settings → Pages
   - Under "Build and deployment":
     - Source: Deploy from a branch
     - Branch: `gh-pages` / `(root)`
   - Click Save

5. Wait 1-2 minutes, then visit:
   ```
   https://your-username.github.io/your-repo-name/
   ```

### Subsequent Deployments

Just run:
```bash
npm run deploy
```

Wait 1-2 minutes for GitHub Pages to update.

## 📂 Project Structure

```
├── public/          # Static assets
├── src/
│   ├── assets/      # Images, fonts, 404.html
│   ├── components/  # Vue components
│   ├── router/      # Vue Router configuration
│   ├── views/       # Page components
│   ├── App.vue      # Root component
│   ├── main.ts      # Application entry point
│   └── style.css    # Global styles (Tailwind directives)
├── .env.production  # Production environment variables
├── index.html       # HTML entry point
└── vite.config.ts   # Vite configuration
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

### Option 1: Using degit (Fastest)
```bash
npx degit your-username/ma-portfolio-notion my-new-project
cd my-new-project
npm install
npm run dev
```

### Option 2: GitHub Template
1. Go to repository Settings
2. Check "Template repository"
3. Use "Use this template" button for new projects

### Option 3: Clone & Reset
```powershell
git clone https://github.com/your-username/ma-portfolio-notion my-new-project
cd my-new-project
Remove-Item -Recurse -Force .git
git init
npm install
```

## 📝 License

MIT
