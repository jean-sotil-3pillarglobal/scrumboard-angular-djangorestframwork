netstat -o -n -a | findstr 127.0.0.1:9009
@echo off
set /p id="Enter ID process: " 
taskkill /F /PID %id%

pause