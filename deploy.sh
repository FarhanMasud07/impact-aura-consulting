#!/bin/bash
set -e

echo "🚀 Starting React build and deployment..."

# Build React
npm install
npm run build


# Navigate to script directory (assumes script is in project root)
cd "$(dirname "$0")"

echo "Switching to productionready branch..."
git checkout productionready || git checkout -b productionready

# Delete old files except dist and .git
find . -maxdepth 1 ! -name "." ! -name "dist" ! -name ".git" -exec rm -rf {} +

# Move only index.html and assets to root
mv dist/index.html .
mv dist/assets .

# Remove now-empty dist folder
rm -rf dist

# Commit and push
git add .
git commit -m "Deploy production build"
git push origin productionready

echo "✅ Deployment complete!"

echo "Switching to main branch..."
git checkout main
git pull origin main
echo "✅ Switched back to main branch."

echo "Starting npm install"
npm install
