set type=%1
set command=npx nodemon

start cmd /k "%command% ./services/auth"
start cmd /k "%command% ./services/cilinders"
start cmd /k "%command% ./services/padlocks"
start cmd /k "%command% ./services/proxy"