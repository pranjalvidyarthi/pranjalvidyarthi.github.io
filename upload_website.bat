@echo off
REM ===== React GitHub Pages Deployment Script =====
echo.
echo Deploying React website to GitHub Pages...
echo.

REM Navigate to project folder (change if needed)
cd /d "%~dp0"

REM Install dependencies (optional if already installed)
echo Installing dependencies...
npm install

REM Build the project
echo Building the React project...
npm run build

REM Deploy to GitHub Pages
echo Deploying to GitHub Pages...
npm run deploy

echo.
echo Deployment completed!
pause
