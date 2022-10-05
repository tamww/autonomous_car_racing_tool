import React, { useState, useEffect } from "react";
// import {Leaderboard} from "./database";
import Profiles from "./profile";
import { Box } from "@mui/material";
import Header from "./Header";
import Hero from "./Hero";
var Leaderboard = require("./database.json");

export default function Board() {
  return (
    <div width="100%">
        <Box>
            <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                marginRight="145px"
                alignItems="center"
            >
            </Box>
            <Header/>
            
        </Box>
        {/* <Hero/> */}
        <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
        >
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
            >
                <Profiles Leaderboard={sorted(Leaderboard)}></Profiles>
            </Box>

        </Box>
      </div>
  );
}

function sorted(data) {
  return data.sort((a, b) => {
    return a.score.localeCompare(b.score);
  });
}
