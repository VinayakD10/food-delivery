# Deployment Guide - Vercel

This guide will help you deploy your food website to Vercel.

## Prerequisites

1. A GitHub account (or GitLab/Bitbucket)
2. A Vercel account (free tier is sufficient)
3. Your code pushed to a Git repository

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Go to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign up or log in (you can use your GitHub account)

3. **Import your project**
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect it's a Vite project

4. **Configure deployment**
   - **Framework Preset**: Vite (auto-detected)
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `dist` (auto-filled)
   - **Install Command**: `npm install` (auto-filled)

5. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete
   - Your site will be live at a URL like: `your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Link to existing project or create new
   - Confirm settings (they should auto-detect from `vercel.json`)

4. **Deploy to production**
   ```bash
   vercel --prod
   ```

## Configuration

The project includes a `vercel.json` file that:
- Configures the build and output settings
- Sets up SPA routing (all routes serve `index.html` for client-side routing)
- Automatically handles React Router navigation

## Environment Variables

If you need to add environment variables:
1. Go to your project settings in Vercel dashboard
2. Navigate to "Environment Variables"
3. Add your variables
4. Redeploy

## Custom Domain

To add a custom domain:
1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your domain
4. Follow DNS configuration instructions

## Continuous Deployment

Once connected to GitHub, Vercel will automatically:
- Deploy on every push to `main` branch
- Create preview deployments for pull requests
- Show build status in GitHub

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version (Vercel uses Node 18.x by default)

### Routing Issues
- The `vercel.json` file handles SPA routing
- All routes should work correctly with the current configuration

### Assets Not Loading
- Ensure all assets are in the `public` folder or imported correctly
- Check that paths use relative URLs

## Support

For more help, visit:
- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)


