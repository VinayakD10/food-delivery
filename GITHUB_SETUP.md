# GitHub Repository Setup Guide

Follow these steps to push your FOODxPREE project to GitHub.

## Step 1: Initialize Git (if not already done)

```bash
git init
```

## Step 2: Add All Files

```bash
git add .
```

## Step 3: Create Initial Commit

```bash
git commit -m "Initial commit: FOODxPREE food delivery website"
```

## Step 4: Create Repository on GitHub

1. Go to [GitHub](https://github.com) and sign in
2. Click the **+** icon in the top right corner
3. Select **New repository**
4. Repository name: `food-website` (or your preferred name)
5. Description: `Modern food delivery website built with React and Vite`
6. Choose **Public** or **Private**
7. **DO NOT** initialize with README, .gitignore, or license (we already have these)
8. Click **Create repository**

## Step 5: Connect Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
git remote add origin https://github.com/YOUR_USERNAME/food-website.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 6: Verify

Visit your repository on GitHub to confirm all files are uploaded.

## Optional: Add GitHub Topics

On your repository page, click the gear icon next to "About" and add topics:
- `react`
- `vite`
- `food-delivery`
- `tailwindcss`
- `javascript`
- `frontend`

## Future Updates

To push future changes:

```bash
git add .
git commit -m "Your commit message"
git push
```

## Branching Strategy

For new features:

```bash
git checkout -b feature/feature-name
# Make your changes
git add .
git commit -m "Add feature description"
git push origin feature/feature-name
```

Then create a Pull Request on GitHub.



