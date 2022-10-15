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

    return () => clearTimeout(timer);
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
        ></Box>
        <Header />
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
    let result = a.score[0].localeCompare(b.score[0]);
    if (
      (a.score[0] === "99:99.999" && b.score[0] === "99:99.999") ||
      result !== 0 ||
      (a.score.length === 1 && b.score.length === 1)
    ) {
      // the scores are TBC or different or there is only one entry inside the array
      if (typeof a.result === "undefined" || !a.result.includes("-->")) {
        a.result = a.score[0];
      }
      if (typeof b.result === "undefined" || !b.result.includes("-->")) {
        b.result = b.score[0];
      }
      return result;
    } else if (result === 0) {
      if (a.score.length === 1) {
        // a = ["00:02.345"] vs. b = ["00:02.345", "00:03.456"]: should be the second team win
        b.result = b.score[0] + " --> " + b.score[1];
        return 1; // a should be behind b
      } else if (b.score.length === 1) {
        a.result = a.score[0] + " --> " + a.score[1];
        return -1; // a should be in front of b
      } else {
        // consider the case where there is a tie, but not when the score is 99:99.999
        a.result = a.score[0] + " --> " + a.score[1];
        b.result = b.score[0] + " --> " + b.score[1];
        return a.score[1].localeCompare(b.score[1]);
      }
    }
  });
}
