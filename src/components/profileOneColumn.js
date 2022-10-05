import React from "react";
import { Box } from "@mui/material";
import { green, yellow, red } from '@mui/material/colors';
import Paper from '@mui/material/Paper';
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("./images", false, /\.(png|jpe?g|svg)$/)
);

export default function Profiles({ Leaderboard }) {
  return (
    <div id="profile">
      {Item(Leaderboard.slice(0, 3).concat(Leaderboard.slice(3, 12)), 0, "test1")}
      {Item(Leaderboard.slice(0, 3).concat(Leaderboard.slice(12, 21)), 9, "test2")}
      {Item(Leaderboard.slice(0, 3).concat(Leaderboard.slice(21, 30)), 18, "test3")}
      {/* {Item(Leaderboard.slice(15, 20), 15, "test4")}
      {Item(Leaderboard.slice(20, 25), 20, "test5")}
      {Item(Leaderboard.slice(25, 30), 25, "test6")} */}
    </div>
  );
}

export function ProfilesThreeColumns({ Leaderboard }) {
  return (
    <div id="profile">
      {ItemThreeColumns(Leaderboard)}
    </div>
  )
}

function getColor(startIndex, index){
  const ind = [400, 'A200', 200, 700, 600, 'A400', 'A700', 500, 800, 900]
  // const ind = [100, "A100", 300, "A200", 400, "A400", 500, 600, 700, "A700"]
  // // const ind = [200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750]
  let color = null
  if (startIndex + index >= 1 && startIndex + index <= 10){
      color =  green[ind[(startIndex + index-1) % 10]]
  } else if (startIndex + index <= 20) {
      color = yellow[ind[(startIndex + index-1) % 10]]
  } else {
      color = red[ind[(startIndex + index-1) % 10]]
  }
  return color
}

function getElevation(index) {
  if (index <= 2){
      return 20
  }
  return 3
}

function Item(data, startIndex, portionID) {
  return (
    <div className="stratifyOneColumn" id={portionID}>
      {data.map((value, index, data) => (
        <Paper elevation={getElevation(index)} sx={{
          padding: "1rem",
          margin: "0.2rem",
          borderRadius: "2rem",
          width: "460px",
          marginBottom: "1rem"
        }}>
        <Box
          // display="flex"
          // flexDirection=""
          // justifyContent="left"
          marginBottom="10px"
          height="80px"
          display="grid"
          width="460px"
          gridTemplateColumns="15% 65% 20%"
          
          // gridGap="20"
        >
          <Box justifyContent="space-around"/*display="flex" flexDirection="column" width="20%"*/>
          {value.score.localeCompare("99:99.999") != 0 && <Stack direction="row" spacing={2}>
            {index <= 2 && <Avatar sx={{ width: 50, height: 50, bgcolor: getColor(0, index + 1)}}><strong style={{fontSize: 30 + 'px'}}>{0 + index + 1}</strong></Avatar>}
            {index > 2 && <Avatar sx={{ width: 50, height: 50, bgcolor: getColor(startIndex, index + 1)}}><strong style={{fontSize: 30 + 'px'}}>{startIndex + index + 1}</strong></Avatar>}
          </Stack>}
          </Box>
          <Box
          // display="flex"
          // flexDirection="column"
          // width="60%"
          // marginLeft="10px"
          // marginRight="10px"
          // alignItems="left"
          >
            <h3 className="name" style={{fontSize: 30 + 'px'}}><strong>{value.name}</strong></h3>
            {value.score.localeCompare("03:00.000") == 0 && <span style={{fontSize: 25 + 'px', fontStyle: "italic"}}>DNF</span>}
            {value.score.localeCompare("99:99.999") == 0 && <span style={{fontSize: 25 + 'px', fontStyle: "italic"}}>TBC</span>}
            {value.score.localeCompare("03:00.000") < 0 && <span style={{fontSize: 25 + 'px', fontStyle: "italic"}}>{value.score}</span>}
          </Box>
        </Box>
        </Paper>
      ))}
    </div>
  );
}

function ItemThreeColumns(data) {
  return (
    <div className="stratifyThreeColumns">
      {data.map((value, index) => (
        <Box
          display="flex"
          flexDirection=""
          justifyContent="left"
        >
          <Box display="flex" flexDirection="column" width="20%">
            <img
              src={images[`${index + 1}.png`]}
              className="numbers"
              alt=""
            />
          </Box>
          <Box
          display="flex"
          flexDirection="column"
          width="60%"
          marginLeft="10px"
          marginRight="10px"
          alignItems="left"
          >
            <h3 className="name text-dark">{value.name}</h3>
            <span>{value.location}</span>
          </Box>
          <Box
          display="flex"
          flexDirection="column"
          width="20%"
          marginLeft="10px"
          marginRight="10px"
          paddingRight="20px"
          >
            <span>{value.score}</span>
          </Box>
        </Box>
      ))}
    </div>
  );
}
