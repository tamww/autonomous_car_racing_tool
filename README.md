## Instructions

1. replace the content of `src/components/database.json` and `src/components/laptime.json` with the content of the respective `_template.json` files
2. run `npm start` to start the development server, which gives us auto-refresh whenever the `database.json` changes (note: run `npm install` first if the repository is just cloned)
3. run `python3 components/readTimeFromArduino_v2.py ${the_current_team_id}` 
    - note the command line argument that represents the ID of the team that is currently on the track (1-30))
    - also remember to change the serial port at the start of the `.py` file; see the `.py` file for more details
4. the best laptime is shown in `database.json` and the leaderboard webpage, while all laptimes are recorded inside `laptime.json`

## REMEMBER

1. run the `.py` file under `src/components`, otherwise the `.json` file would be updated in a wrong place
2. load the `.ino` file inside the arduino before using the `.py` file
