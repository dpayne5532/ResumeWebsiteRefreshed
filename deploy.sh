#!/bin/bash

set -e  # Exit immediately if a command exits with a non-zero status
current_branch=$(git rev-parse --abbrev-ref HEAD)

echo "🚀 Starting deployment of ResumeWebsiteRefreshed..."

echo "🔄 Pulling latest code from GitHub..."
git checkout master
git pull origin master
git checkout "$current_branch"

echo "📦 Installing/updating dependencies..."
npm install

echo "🛠️ Building the React app..."
npm run build

echo "🧹 Cleaning old files from /var/www/danpayne.co..."
sudo rm -rf /var/www/danpayne.co/*

echo "📁 Copying new build to /var/www/danpayne.co..."
sudo cp -r build/* /var/www/danpayne.co/

echo "🔁 Reloading Nginx..."
sudo systemctl reload nginx

echo "✅ Deployment complete! Check https://danpayne.co"
