# Push Code to GitHub - Step by Step Guide

## Prerequisites

### 1. Install Git (if not installed)

**For Windows:**
1. Download Git from: https://git-scm.com/download/win
2. Run the installer with default settings
3. Restart your terminal/PowerShell after installation

**Verify Installation:**
```bash
git --version
```

### 2. Create GitHub Account (if you don't have one)
- Go to https://github.com
- Sign up for a free account

---

## Step-by-Step Instructions

### Step 1: Open Terminal/PowerShell
Navigate to your project folder:
```bash
cd C:\Users\vinay\OneDrive\Desktop\food-website
```

### Step 2: Initialize Git Repository
```bash
git init
```

### Step 3: Add All Files
```bash
git add .
```

### Step 4: Create Initial Commit
```bash
git commit -m "Initial commit: FOODxPREE food delivery website"
```

### Step 5: Create Repository on GitHub

1. Go to https://github.com and sign in
2. Click the **+** icon (top right) → **New repository**
3. Repository name: `food-website` (or your preferred name)
4. Description: `Modern food delivery website built with React and Vite`
5. Choose **Public** or **Private**
6. **IMPORTANT:** Do NOT check "Initialize with README" (you already have files)
7. Click **Create repository**

### Step 6: Connect and Push to GitHub

After creating the repository, GitHub will show you commands. Run these in your terminal:

```bash
# Replace YOUR_USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR_USERNAME/food-website.git

# Set main branch
git branch -M main

# Push to GitHub
git push -u origin main
```

**Note:** If you're asked for credentials:
- Username: Your GitHub username
- Password: Use a **Personal Access Token** (not your GitHub password)
  - Generate token: GitHub → Settings → Developer settings → Personal access tokens → Generate new token
  - Select scopes: `repo` (full control)
  - Copy the token and use it as password

### Step 7: Verify

Visit `https://github.com/YOUR_USERNAME/food-website` to see your code!

---

## Quick Command Reference

```bash
# Check status
git status

# Add all changes
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push

# Pull latest changes
git pull
```

---

## Troubleshooting

### "git is not recognized"
- Install Git from https://git-scm.com/download/win
- Restart your terminal after installation

### "Permission denied" or "Authentication failed"
- Use Personal Access Token instead of password
- Or use SSH keys for authentication

### "Repository not found"
- Check that the repository name matches exactly
- Verify your GitHub username is correct

### Need to update remote URL?
```bash
git remote set-url origin https://github.com/YOUR_USERNAME/food-website.git
```

---

## Next Steps After Pushing

1. **Add repository description and topics** on GitHub
2. **Deploy to Vercel** - See `DEPLOYMENT.md` for instructions
3. **Set up GitHub Actions** (optional) for CI/CD

---

**Need Help?** Check the official Git documentation: https://git-scm.com/doc

