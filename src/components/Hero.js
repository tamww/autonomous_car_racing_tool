import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import logo from './images/HSBC.png';
import deepracer from './images/Deepracer.png'
import csl from './images/CSL.png'
import useStyles from '../styles/styles';

const Hero = () => {
  const classes = useStyles();
  return (
    <Box className={classes.heroBox} sx ={{
      
    }}>
      <Grid container spacing={4} className={classes.gridContainer} sx={{
        marginBottom: "-6rem",
        marginTop: "2rem",
        display: "flex", 
        justifyContent: "space-around"
      }}>
        <Grid item xs={12} md={12} sx={{
          textAlign: "center"
        }}>
          <Typography variant="h2" fontWeight={700} className={classes.title}>
            AWS DeepRacer League
          </Typography>
          <Typography variant="h3" className={classes.subtitle}>
           Powered by <strong>HSBC Technology</strong>
          </Typography> 
        </Grid>
      </Grid>
      <Grid container spacing={4} className={classes.gridContainer} sx={{
        marginBottom: "2rem",
        marginTop: "-6rem"
      }}>
        <Grid item xs={4} md={4}>
          <img src={csl} alt="My Team" className={classes.largeImage} />
        </Grid>
        <Grid item xs={4} md={4}>
          <img src={logo} alt="My Team" className={classes.largeImage} />
        </Grid>
        <Grid item xs={4} md={4}>
          <img src={deepracer} alt="My Team" className={classes.largeImage} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;