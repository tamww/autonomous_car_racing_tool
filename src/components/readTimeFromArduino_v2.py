import serial
import json
from datetime import datetime, timedelta
import sys

"""
instuctions to run the script (macOS or linux-like):
0) LOAD THE .ino FILE INTO YOUR ARDUINO (see the circuit diagram attached)
1) run `ls /dev/tty.*` in the terminal
2) if Arduino is plugged into the computer, then you should see
   /dev/tty.usbserial-##### as one of the result
3) put this number inside the serial.Serial() object
4) run the script at the start of the race
5) after the end of the race, interrupt the script by ctrl+c
6) laptime.json stores the laptime of each lap in the format of
   "${lap_number}": ${lap_time}
"""
ser = serial.Serial("/dev/tty.usbserial-14320", timeout=1)
hasStarted = False
startTime = datetime.now()
endTime = datetime.now()
laptime = dict()
previousPeak = datetime.now()
lap = 1
count = 0
teamID = int(sys.argv[1])

while True:
    line = ser.readline()
    candidateTime = datetime.now()
    if line == b"1\r\n" and not hasStarted:  # the first touch is the start of the race
        startTime = datetime.now()
        hasStarted = True
    elif (candidateTime - startTime).total_seconds() >= 2:
        if line == b"1\r\n":
            count += 1
            if count > 5:
                # from the second pass onwards, laptime = now() - startTime, and
                # now() becomes the startTime of the next lap
                endTime = candidateTime
                rawLaptime = endTime - startTime
                rawLaptimeMinute = rawLaptime.seconds // 60
                rawLaptimeSeconds = rawLaptime.seconds % 60
                rawLaptimeMilliseconds = rawLaptime.microseconds // 1000
                # format: xx:yy.zzz
                laptime[lap] = f"{rawLaptimeMinute:02}:{rawLaptimeSeconds:02}.{rawLaptimeMilliseconds:03}"
                print(f"Team {teamID}'s Lap {lap} time: {laptime[lap]}")
                startTime = endTime

                with open("laptime.json", "r") as f:  # 1) write all the lap time into laptime.json
                    allLapTimeListOfDict = json.load(f)
                allLapTimeListOfDict[teamID - 1]["score"] = laptime
                with open("laptime.json", "w") as f:
                    json.dump(allLapTimeListOfDict, f)

                # 2) read the best lap time from database.json
                with open("database.json", "r") as f:
                    bestTimeListOfDict = json.load(f)
                rawBestTime = bestTimeListOfDict[teamID - 1]["score"]
                # e.g., currentTime = ["02", "13", "158"] (i.e., [min, sec, ms])
                currentTime = bestTimeListOfDict[teamID - 1]["score"].split(":")
                # now currentTime = ["02", "13.158"]
                currentTime = [currentTime[0]] + currentTime[1].split(".")
                currentTimeDatetime = timedelta(minutes=int(currentTime[0]), seconds=int(
                    currentTime[1]), milliseconds=int(currentTime[2]))
                if rawBestTime == "00:00:000":  # initial placeholder --> always update
                    bestTimeListOfDict[teamID - 1]["score"] = laptime[lap]
                # test if the current lap time is the fastest
                elif rawLaptime.total_seconds() < currentTimeDatetime.total_seconds():
                    bestTimeListOfDict[teamID - 1]["score"] = laptime[lap]
                with open("database.json", "w") as f:  # write the new best lap time to database.json
                    json.dump(bestTimeListOfDict, f)
                lap += 1
                count = 0
        else:
            count = 0
