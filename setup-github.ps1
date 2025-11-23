# PowerShell script to push code to GitHub
# Run this AFTER installing Git and creating a GitHub repository

Write-Host "=== FOODxPREE - GitHub Setup Script ===" -ForegroundColor Cyan
Write-Host ""

# Check if Git is installed
try {
    $gitVersion = git --version
    Write-Host "✓ Git is installed: $gitVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ Git is not installed!" -ForegroundColor Red
    Write-Host "Please install Git from: https://git-scm.com/download/win" -ForegroundColor Yellow
    Write-Host "Then restart PowerShell and run this script again." -ForegroundColor Yellow
    exit
}

Write-Host ""
Write-Host "This script will:" -ForegroundColor Cyan
Write-Host "1. Initialize git repository (if not already done)"
Write-Host "2. Add all files"
Write-Host "3. Create initial commit"
Write-Host ""
Write-Host "You'll need to:" -ForegroundColor Yellow
Write-Host "- Create a repository on GitHub first"
Write-Host "- Provide your GitHub username and repository name"
Write-Host ""

$proceed = Read-Host "Do you want to continue? (y/n)"
if ($proceed -ne "y" -and $proceed -ne "Y") {
    Write-Host "Cancelled." -ForegroundColor Yellow
    exit
}

# Initialize git if not already done
if (-not (Test-Path .git)) {
    Write-Host "Initializing git repository..." -ForegroundColor Cyan
    git init
    Write-Host "✓ Git repository initialized" -ForegroundColor Green
} else {
    Write-Host "✓ Git repository already initialized" -ForegroundColor Green
}

# Add all files
Write-Host "Adding all files..." -ForegroundColor Cyan
git add .
Write-Host "✓ Files added" -ForegroundColor Green

# Check if there are changes to commit
$status = git status --porcelain
if ([string]::IsNullOrWhiteSpace($status)) {
    Write-Host "No changes to commit. Repository is up to date." -ForegroundColor Yellow
} else {
    Write-Host "Creating initial commit..." -ForegroundColor Cyan
    git commit -m "Initial commit: FOODxPREE food delivery website"
    Write-Host "✓ Commit created" -ForegroundColor Green
}

Write-Host ""
Write-Host "=== Next Steps ===" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Go to https://github.com and create a new repository" -ForegroundColor Yellow
Write-Host "2. After creating the repository, run these commands:" -ForegroundColor Yellow
Write-Host ""
Write-Host "   git remote add origin https://github.com/YOUR_USERNAME/food-website.git" -ForegroundColor White
Write-Host "   git branch -M main" -ForegroundColor White
Write-Host "   git push -u origin main" -ForegroundColor White
Write-Host ""
Write-Host "Replace YOUR_USERNAME with your actual GitHub username." -ForegroundColor Yellow
Write-Host ""
Write-Host "For detailed instructions, see PUSH_TO_GITHUB.md" -ForegroundColor Cyan


