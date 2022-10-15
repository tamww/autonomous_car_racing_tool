import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { green, yellow, red } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

// function importAll(r) {
//   let images = {};
//   r.keys().forEach((item, index) => {
//     images[item.replace("./", "")] = r(item);
//   });
//   return images;
// }

// const images = importAll(
//   require.context("./images", false, /\.(png|jpe?g|svg)$/)
// );

export default function Profiles({ Leaderboard }) {
  return (
    <div id="profile">
      {Item(Leaderboard.slice(0, 8), 0, false)}
      {Item(Leaderboard.slice(8, 16), 8, false)}
      {Item(Leaderboard.slice(16, 24), 16, false)}
      {Item(Leaderboard.slice(24, 30), 24, true)}
    </div>
  );
}

function getColor(index) {
  const ind = [400, "A200", 200, 700, 600, "A400", "A700", 500, 800, 900];
  let color = null;
  if (index >= 1 && index <= 10) {
    color = green[ind[(index - 1) % 10]];
  } else if (index <= 20) {
    color = yellow[ind[(index - 1) % 10]];
  } else {
    color = red[ind[(index - 1) % 10]];
  }
  return color;
}

function getElevation(index) {
  if (index <= 2) {
    return 20;
  }
  return 3;
}

// export default function Profiles({ Leaderboard }) {
//   return (
//     <div id="profile">
//       {Item(Leaderboard.slice(0, 10), 0, "test1")}
//       {Item(Leaderboard.slice(10, 20), 10, "test2")}
//       {Item(Leaderboard.slice(20, 30), 20, "test3")}
//       {/* {Item(Leaderboard.slice(15, 20), 15, "test4")}
//       {Item(Leaderboard.slice(20, 25), 20, "test5")}
//       {Item(Leaderboard.slice(25, 30), 25, "test6")} */}
//     </div>
//   );
//}

function Item(data, startIndex, needTempStatement) {
  console.log(data);
  return (
    <div class="stratify">
      {data.map((value, index, data) => (
        <Paper
          elevation={getElevation(startIndex + index)}
          sx={{
            padding: "1.5rem",
            margin: "0.2rem",
            borderRadius: "2rem",
            width: "100%",
            marginBottom: "1rem",
          }}
        >
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="left"
            //   marginBottom="10px"
            height="80px"
            width="460px"
          >
            <Box
              display="flex"
              flexDirection="column"
              width="15%"
              justifyContent="space-around"
            >
              {value.result.localeCompare("99:99.999") != 0 && (
                <Stack direction="row" spacing={2}>
                  <Avatar
                    sx={{
                      width: 50,
                      height: 50,
                      bgcolor: getColor(startIndex + index + 1),
                    }}
                  >
                    <strong style={{ fontSize: 30 + "px" }}>
                      {startIndex + index + 1}
                    </strong>
                  </Avatar>
                </Stack>
              )}
            </Box>
            <Box display="flex" flexDirection="column" width="65%">
              <h3 className="name" style={{ fontSize: 30 + "px" }}>
                <strong>{value.name}</strong>
              </h3>
              {value.result.localeCompare("03:00.000") == 0 && (
                <span style={{ fontSize: 25 + "px", fontStyle: "italic" }}>
                  DNF
                </span>
              )}
              {value.result.localeCompare("99:99.999") == 0 && (
                <span style={{ fontSize: 25 + "px", fontStyle: "italic" }}>
                  TBC
                </span>
              )}
              {value.result.localeCompare("03:00.000") < 0 && (
                <span style={{ fontSize: 25 + "px", fontStyle: "italic" }}>
                  {value.result}
                </span>
              )}
              {/* <span style={{fontSize: 20 + 'px'}}>{value.location}</span> */}
            </Box>
            {/* <Box
                          display="flex"
                          flexDirection="column"
                          width="20%"
                          // paddingRight="1rem"
                      >   
                          
                      </Box> */}
          </Box>
        </Paper>
      ))}
      {needTempStatement === true && (
        <Box style={{ textAlign: "left",marginLeft:"15px" }}>
          <span style={{ marginTop: 130 + "px", fontSize: 30 + "px" }}>
            Note: The laptime for each team <br></br> would be finalized after
            their <br></br> race ends.
          </span>
        </Box>
      )}
    </div>
  );
}
