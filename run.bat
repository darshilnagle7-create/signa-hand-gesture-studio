@echo off
setlocal
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Node.js was not found. Install Node.js to start the local server.
  pause
  exit /b 1
)
start "Signa" http://localhost:8000
node server.mjs
