import React from "react";
import { Box } from "@mui/material";

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
      {Item(Leaderboard.slice(0, 10), 0, "test1")}
      {Item(Leaderboard.slice(10, 20), 10, "test2")}
      {Item(Leaderboard.slice(20, 30), 20, "test3")}
      {/* {Item(Leaderboard.slice(15, 20), 15, "test4")}
      {Item(Leaderboard.slice(20, 25), 20, "test5")}
      {Item(Leaderboard.slice(25, 30), 25, "test6")} */}
    </div>
  );
}

function Item(data, startIndex, portionID) {
  return (
    <div className="stratify" id={portionID}>
      {data.map((value, index) => (
        <Box
          // display="flex"
          // flexDirection=""
          // justifyContent="left"
          marginBottom="10px"
          height="75px"
          display="grid"
          gridTemplateColumns="70px 280px 80px"
          // gridGap="20"
        >
          <Box /*display="flex" flexDirection="column" width="20%"*/>
            <img
              src={images[`${startIndex + index + 1}.png`]}
              className="numbers"
              alt=""
            />
          </Box>
          <Box
          // display="flex"
          // flexDirection="column"
          // width="60%"
          // marginLeft="10px"
          // marginRight="10px"
          // alignItems="left"
          >
            <h3 className="name text-dark">{value.name}</h3>
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
            <span>{value.score}</span>
          </Box>
        </Box>
      ))}
    </div>
  );
}
