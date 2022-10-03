import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import logo from './images/HSBC.png';
import deepracer from './images/Deepracer.png'
import csl from './images/CSL.png'
import hangseng from "./images/HS.png"
import useStyles from '../styles/styles';

const Hero = () => {
  const classes = useStyles();
  return (
    <Box className={classes.heroBox} sx ={{
      
    }}>
      <Grid container spacing={4} className={classes.gridContainer} sx={{
        marginBottom: "-6rem",
        marginTop: "rem",
        display: "flex", 
        justifyContent: "space-around"
      }}>
        <Grid item xs={12} md={12} sx={{
          textAlign: "center"
        }}>
          {/* <Typography variant="h2" fontWeight={700} className={classes.title} sx={{
            marginBottom: "1.5rem",
          }}> 
            AWS DeepRacer League
          </Typography> */}
        </Grid>
      </Grid>
      <Grid container spacing={4} className={classes.gridContainer} sx={{
        marginBottom: "2rem",
        marginTop: "-6rem"
      }}>
        <Grid item xs={4} md={4}>
          <img src={hangseng} alt="My Team" className={classes.largeImage} />
        </Grid>
        <Grid item xs={4} md={4}>
          <img src={deepracer} alt="My Team" className={classes.largeImage} />
        </Grid>
        <Grid item xs={4} md={4}>
          <img src={logo} alt="My Team" className={classes.largeImage} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;