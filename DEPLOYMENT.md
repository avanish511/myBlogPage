# Deployment Guide for Poetry Blog

## Current Status ✅

Your poetry blog is now running successfully at `http://localhost:4321`!

## Deployment Options

### Option 1: Vercel (Recommended)

1. **Push to GitHub**:

   ```bash
   git add .
   git commit -m "Initial poetry blog setup"
   git push origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables:
     - `MONGODB_URI`: Your MongoDB connection string
   - Deploy!

### Option 2: Netlify

1. **Build the project**:

   ```bash
   npm run build
   ```

2. **Deploy**:
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder
   - Or connect your GitHub repository

### Option 3: GitHub Pages

1. **Update astro.config.mjs**:

   ```javascript
   export default defineConfig({
     site: "https://yourusername.github.io",
     base: "/blogPage",
   });
   ```

2. **Add GitHub Actions** (create `.github/workflows/deploy.yml`):
   ```yaml
   name: Deploy to GitHub Pages
   on:
     push:
       branches: [main]
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - uses: actions/setup-node@v2
           with:
             node-version: "18"
         - run: npm install
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

## MongoDB Setup

### For Production:

1. **MongoDB Atlas**:

   - Create account at [mongodb.com/atlas](https://mongodb.com/atlas)
   - Create a new cluster
   - Get connection string
   - Add to environment variables

2. **Environment Variables**:
   ```bash
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/poetry-blog?retryWrites=true&w=majority
   ```

## Adding Poems

### Via API (when MongoDB is connected):

```javascript
// POST to /api/poems
{
  "title": "My New Poem",
  "content": "Poem content here...",
  "category": "love",
  "tags": ["romance", "heart"],
  "published": true
}
```

### Direct Database:

- Connect to MongoDB Atlas
- Add documents to `poems` collection
- Use the schema defined in `src/lib/mongodb.ts`

## Customization

### Colors & Themes:

- Edit `tailwind.config.mjs`
- Modify `src/styles/global.css`

### Content:

- Update poems in `src/pages/poems.astro`
- Modify memories in `src/components/MemoryGallery.astro`
- Change personal info in `src/pages/about.astro`

## Troubleshooting

### Node Version Issues:

If you encounter Node version issues:

1. **Upgrade Node.js** (recommended):

   ```bash
   # Using nvm
   nvm install 20
   nvm use 20
   ```

2. **Or use Docker**:
   ```dockerfile
   FROM node:20-alpine
   WORKDIR /app
   COPY package*.json ./
   RUN npm install
   COPY . .
   RUN npm run build
   CMD ["npm", "run", "preview"]
   ```

### Build Issues:

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

## Performance Tips

1. **Optimize Images**: Use WebP format
2. **Enable Compression**: Configure server compression
3. **CDN**: Use Cloudflare or similar
4. **Caching**: Set proper cache headers

## Security

1. **Environment Variables**: Never commit `.env` files
2. **MongoDB**: Use proper authentication
3. **HTTPS**: Always use SSL in production
4. **Rate Limiting**: Implement API rate limits

## Monitoring

1. **Analytics**: Add Google Analytics or similar
2. **Error Tracking**: Use Sentry or similar
3. **Uptime**: Monitor with UptimeRobot
4. **Performance**: Use Lighthouse for optimization

---

Your poetry blog is ready to share with the world! 🌟
