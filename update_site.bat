@echo off
echo ==========================================
echo   PUSHING UPDATES TO GITHUB
echo ==========================================
echo.

echo 1. Adding changes...
git add .

echo 2. Committing changes...
set /p commit_msg="Enter description of changes: "
git commit -m "%commit_msg%"

echo 3. Pushing to GitHub...
git push

echo.
echo ==========================================
echo   DONE! 
echo   Vercel/Netlify will now auto-deploy.
echo ==========================================
pause
