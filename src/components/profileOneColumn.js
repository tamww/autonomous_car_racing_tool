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
      {data.map((value, index) => (
        <Paper elevation={getElevation(index)} sx={{
          padding: "1rem",
          margin: "0.2rem",
          borderRadius: "2rem",
          width: "100%"
        }}>
        <Box
          // display="flex"
          // flexDirection=""
          // justifyContent="left"
          marginBottom="10px"
          height="50px"
          display="grid"
          gridTemplateColumns="70px 280px 80px"
          // gridGap="20"
        >
          <Box /*display="flex" flexDirection="column" width="20%"*/>
          <Stack direction="row" spacing={2}>
            {index <= 2 && <Avatar sx={{ width: 46, height: 46, bgcolor: getColor(0, index + 1)}}><strong>{0 + index + 1}</strong></Avatar>}
            {index > 2 && <Avatar sx={{ width: 46, height: 46, bgcolor: getColor(startIndex, index + 1)}}><strong>{startIndex + index + 1}</strong></Avatar>}
          </Stack>
          </Box>
          <Box
          // display="flex"
          // flexDirection="column"
          // width="60%"
          // marginLeft="10px"
          // marginRight="10px"
          // alignItems="left"
          >
            <h3 className="name">{value.name}</h3>
            <span>{value.location}</span>
          </Box>
          <Box
          // display="flex"
          // flexDirection="column"
          // width="20%"
          // marginLeft="10px"
          // marginRight="10px"
          // paddingRight="20px"
          >
            {value.score == "03:00.000" && <span>TBC</span>}
            {value.score != "03:00.000" && <span>{value.score}</span>}
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
