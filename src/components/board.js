import React, { useState, useEffect } from "react";
// import {Leaderboard} from "./database";
import Profiles from "./profile";
import { Box } from "@mui/material";
import Header from "./Header";
import Hero from "./Hero";
var Leaderboard = require("./database.json");
export default function Board() {
  // const [currentPage, setCurrentPage] = useState(1);

  // useEffect(() => {
  //   for (let i = 1; i <= 3; i++) {
  //     if (i !== currentPage) {
  //       document.getElementById(`test${i}`).style.visibility = "hidden";
  //       document.getElementById(`test${i}`).style.display = "none";
  //     } else {
  //       document.getElementById(`test${i}`).style.visibility = "visible";
  //       document.getElementById(`test${i}`).style.display = "block";
  //     }
  //   }
  // });

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
        <Hero/>
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
    // <div>
    //   <Box>
    //     <Box
    //       display="flex"
    //       flexDirection="row"
    //       justifyContent="space-between"
    //       marginRight="145px"
    //       alignItems="center"
    //     >
    //       <img
    //         className="image"
    //         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAYFBMVEX////uNCTuMiHtFgD6z8z0kYv+9PTtKRTtHgDuLRvuKxjycGj72dftIwr//PztIQT8393vRjnwTkLyeHHvPC3+8vLsAAD3ran0iYT2oZ384+Hxa2Pydm7vPS/wUEXxWE0lwb38AAADH0lEQVR4nO3ZCXKbQBBAUZAStFpOrCXK6vvfMiBAzNI9Ahcp0eT/EwyPmYaCLCMiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIqL/p/O36+fhXb//ePbCx+vwUvxcroa2PmWvX5699LE6nC5FtnvJh7X9esgWy5kgFKfNssiGIlQEWT4ThJIgrwyGIdwISoPFegYIFUFtMAShJigN8hkg3Agag/4IDUFlYP841AStQV+EluBmYB2hIbgb9EO4E9QGthFags6gD0JH0BhYngl3AsfgMYJD0BrYRegIXINHCC7B3cAqgkPgGaQRPILOwOZMcAl8gxSCT+AYWETwCAIDHSEgcA3sIfgEoYGGEBJ4BtZmQkAQGcgIEYFvYAshJIgNJISYIDCwdBwiAsEgRhAIQgM7CDGBZBAiSASRgRUEgUA08BFEgtjABoJEIBu4CDKBYGBhMIoEikGHoBBIBtPfCTKBZtAiaASiwdQRFALVoEZQCWSDaSNoBLpBhaATKAZTRlAJEgbZbqkTaAbTRTgvNIKUQXbVCVSDEmE//gWM0a/XDxgUvxNXoxps3xKqT+2oIegGRb5J3FLNYPv2T9Y/ShqCanDON6l9rRhMmUBF0AwqgtThlg2mTaAhKAY1QQJBNJg6gYIgGxR5+yDRECSD6RPICKJBR6AiCAYrAwQigmRwzt3XCRkhNrBBICEIBj6BghAZWCEQEGKDkEBGCA3sEMQIkUFMICIEBpYIIoTQoBAIJATfwBZBiBAYyAQCgmdgjSBA8A2kgyAjuAb2CHwEz0AniBAcA4sEHoJrkCIIEToDmwQugmOQJggQ7gZWCRyEzkAbhzJCa2CXoEO4GzzaBQFCY7D686T1j1KD0Br0IXARagPbBC1CY9CPwEG4GVgnaBBqg74EHUJlYHkWtFUIN4NC//auIZQG9ndB1XF9M0j8flAR8sU8CCqE0qD/QXAQZrILqo6Xw+P3AgnBwrfDvu32L8v14C7792cvfMw+fazEr0giIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIpptfwEc/CjFucDMkgAAAABJRU5ErkJggg=="
    //         alt=""
    //       />

    //       <h2 style={{ textAlign: "center" }}>AWS DeepRacer Leaderboard</h2>
    //       <img
    //         className="image"
    //         src={require("./images/Picture1.png")}
    //         alt=""
    //       />
    //       {/*<img className="image" src="https://www.softwareone.com/-/media/global/logos/aws-logo-teaser.png?rev=7faf0711601f44be8c333218fb2de560&sc_lang=zh-hk&hash=B67527555D38CACE74BC66F96E1F8AD8" alt="" />*/}
    //     </Box>
    //   </Box>
    //   <Box display="flex" flexDirection="row" justifyContent="center">
    //     <Box display="flex" flexDirection="column" justifyContent="center">
    //       <Profiles Leaderboard={sorted(Leaderboard)}></Profiles>
    //     </Box>
    //   </Box>
    //   <Box display="flex" flexDirection="row" justifyContent="center">
    //     <button onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}>
    //       Prev
    //     </button>
    //     <button onClick={() => setCurrentPage(Math.min(currentPage + 1, 3))}>
    //       Next
    //     </button>
    //   </Box>
    //   <Box position="absolute" right="5%">
    //     <p>powered by CSL.</p>
    //   </Box>
    // </div>
  );
}

// function sorted(data) {
//   return data.sort((a, b) => {
//       const timeA = a.score.split(/:/);
//       const timeB = b.score.split(/:/);
//       const timeAMil = parseInt(timeA[0]) * 60000 + parseInt(timeA[1]) * 1000 + parseInt(timeA[2]);
//       const timeBMil = parseInt(timeB[0]) * 60000 + parseInt(timeB[1]) * 1000 + parseInt(timeB[2]);
//       return timeAMil-timeBMil;
//   })
// }

function sorted(data) {
  return data.sort((a, b) => {
    return a.score.localeCompare(b.score);
  });
}

// function previousPage(currentPage) {
//   if (currentPage > 1) {
//     document.getElementById(`test${currentPage}`).style.visibility = "visible";
//     document.getElementById(`test${currentPage}`).style.display = "block";
//     currentPage -= 1;
//   }
// }

// function nextPage(currentPage) {
//   if (currentPage < 5) {
//     document.getElementById(`test${currentPage}`).style.visibility = "visible";
//     document.getElementById(`test${currentPage}`).style.display = "block";
//     currentPage += 1;
//   }
// }

// function showFirstFiveTeams() {
//     document.getElementById("test1").style.display = "block";
//     document.getElementById("test1").style.visibility = "visible";
//   }
