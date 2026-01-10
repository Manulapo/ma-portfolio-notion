# GitHub Pages Deployment Checklist

## ✅ Before First Deployment

### 1. Update Repository Name (2 files)

**File: `.env.production`**
```env
VITE_SITE_BASE='/your-repo-name'
```
Replace `your-repo-name` with your actual GitHub repository name.

**File: `src/assets/404.html` (line 12)**
```javascript
window.location.href = 'https://your-username.github.io/your-repo-name/?path=' + pathname
```
Replace:
- `your-username` with your GitHub username
- `your-repo-name` with your repository name

### 2. Push to GitHub

```bash
git add .
git commit -m "Setup for deployment"
git push origin main
```

### 3. Deploy

```bash
npm run deploy
```

This will:
- Build the project
- Push the `dist` folder to the `gh-pages` branch

### 4. Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Build and deployment":
   - **Source**: Deploy from a branch
   - **Branch**: `gh-pages`
   - **Folder**: `/ (root)`
4. Click **Save**

### 5. Wait & Visit

- Wait 1-2 minutes for deployment
- Visit: `https://your-username.github.io/your-repo-name/`

---

## 🔄 Subsequent Deployments

Just run:
```bash
npm run deploy
```

Changes will be live in 1-2 minutes.

---

## 🐛 Troubleshooting

### Blank Page or 404 Errors

- Verify `.env.production` has the correct repository name
- Verify `404.html` has the correct URL
- Check GitHub Pages settings are correct
- Wait 2-3 minutes after deployment

### Resources Not Loading

- Make sure `base: ''` is set in `vite.config.ts`
- Check browser console for errors
- Try hard refresh (Ctrl+Shift+R)

### Router Not Working After Refresh

- Verify `404.html` is in the `dist` folder after build
- Check that `vite-plugin-static-copy` is configured correctly
- Ensure router has the correct `baseName` from environment variable

---

## 📝 Notes

- The `dist` folder is **not** in `.gitignore` (required for deployment)
- Only the `dist` folder is pushed to `gh-pages` branch
- Main branch keeps your source code
- `gh-pages` branch is auto-created on first deploy
