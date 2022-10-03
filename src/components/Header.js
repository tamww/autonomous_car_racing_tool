import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useStyles from '../styles/styles';
import logo from './images/HSBC.png';
import deepracer from './images/Deepracer.png'
import csl from './images/CSL.png'
import hangseng from "./images/HS.png"
import { Grid} from "@mui/material"
const Header = () => {
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1, marginBottom: "1rem"}}>
      <AppBar sx={{
        position: "fixed",
        top: "0",
        paddingBottom: '0.5rem',
      }}>
        <Toolbar sx={{
          textAlign: "center",
          heigth: "5rem"
        }}>
          <Box className={classes.heroBox} >
                <Grid container spacing={0} className={classes.gridContainer} sx={{
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

        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;