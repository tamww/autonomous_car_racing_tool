import React, { useState, useEffect } from "react";
// import {Leaderboard} from "./database";
import Profiles from "./profileOneColumn";
import { Box } from "@mui/material";
import Header from "./Header";

var Leaderboard = require("./database.json");

export default function Board() {
  const [currentPage, setCurrentPage] = useState(2);

  useEffect(() => {
    const timer = setTimeout(() => {
      for (let i = 1; i <= 3; i++) {
        if (i !== currentPage) {
          document.getElementById(`test${i}`).style.visibility = "hidden";
          document.getElementById(`test${i}`).style.display = "none";
        } else {
          document.getElementById(`test${i}`).style.visibility = "visible";
          document.getElementById(`test${i}`).style.display = "block";
        }
      }

      if (currentPage === 3) {
        setCurrentPage(1);
      } else {
        setCurrentPage(currentPage + 1);
      }
    }, 10000);

    

    return () => clearTimeout(timer)
  }, [currentPage]);

  return (
    <div>
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
      <Box display="flex" flexDirection="row" justifyContent="center">
        <Box display="flex" flexDirection="column" justifyContent="center">
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
