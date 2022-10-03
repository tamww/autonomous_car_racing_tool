import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { green, yellow, red } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

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

export default function Profiles({Leaderboard}){
  return(
      <div id="profile">
          {Item(Leaderboard)}
      </div>
  )
}

function getColor(index){
  const ind = [400, 'A200', 200, 700, 600, 'A400', 'A700', 500, 800, 900]
  let color = null
  if (index >= 1 && index <= 10){
      color =  green[ind[(index-1) % 10]]
  } else if (index <= 20) {
      color = yellow[ind[(index-1) % 10]]
  } else {
      color = red[ind[(index-1) % 10]]
  }
  return color
}

function getElevation(index) {
  if (index <= 2){
      return 20
  }
  return 3
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


function Item(data){
  console.log(data)
  return(
      <div class="stratify">
          {
              data.map((value, index) => ( 
                  <Paper elevation={getElevation(index)} sx={{
                      padding: "1rem",
                      margin: "0.2rem",
                      borderRadius: "2rem",
                      width: "100%"
                  }}>
                      <Box
                          display="flex"
                          flexDirection="row"
                          justifyContent="left"
                        //   marginBottom="10px"
                          height="50px"
                          width= "100"
                      >
                      <Box
                          display="flex"
                          flexDirection="column"
                          width="30%"
                      >
                          <Stack direction="row" spacing={2}>
                              <Avatar sx={{ width: 46, height: 46, bgcolor: getColor(index + 1)}}><strong>{index + 1}</strong></Avatar>
                          </Stack>
                      </Box>
                      <Box
                          display="flex"
                          flexDirection="column"
                          width="90%"
                      >
                          <h3 className="name"><strong>{value.name}</strong></h3>
                          <span>{value.location}</span>
                      </Box>
                      <Box
                          display="flex"
                          flexDirection="column"
                          width="10%"
                          paddingRight="1rem"
                      >   
                          {value.score == "03:00.000" && <span>TBC</span>}
                          {value.score != "03:00.000" && <span>{value.score}</span>}
                      </Box>

                  </Box>
                  </Paper>
              ))
          }
      </div>
  )
}

// function Item(data, startIndex, portionID) {
//   return (
//     <div className="stratify" id={portionID}>
//       {data.map((value, index) => (
//         <Box
//           // display="flex"
//           // flexDirection=""
//           // justifyContent="left"
//           marginBottom="10px"
//           height="75px"
//           display="grid"
//           gridTemplateColumns="70px 280px 80px"
//           // gridGap="20"
//         >
//           <Box /*display="flex" flexDirection="column" width="20%"*/>
//             <img
//               src={images[`${startIndex + index + 1}.png`]}
//               className="numbers"
//               alt=""
//             />
//           </Box>
//           <Box
//           // display="flex"
//           // flexDirection="column"
//           // width="60%"
//           // marginLeft="10px"
//           // marginRight="10px"
//           // alignItems="left"
//           >
//             <h3 className="name text-dark">{value.name}</h3>
//             <span>{value.location}</span>
//           </Box>
//           <Box
//           // display="flex"
//           // flexDirection="column"
//           // width="20%"
//           // marginLeft="10px"
//           // marginRight="10px"
//           // paddingRight="20px"
//           >
//             <span>{value.score}</span>
//           </Box>
//         </Box>
//       ))}
//     </div>
//   );
// }
