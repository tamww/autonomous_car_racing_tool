import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import csl from "./images/CSL.png"
import hkt from "./images/hkt.png"
import useStyles from '../styles/styles';

function Copyright() {
  const classes = useStyles();
  return (
    <Box sx={{display: 'flex'}}>
      <span style={{marginTop: '2px', marginRight: '5px'}}>Powered by</span>
      <img src={hkt} alt="HKT" className={classes.iconImage} sx={{ verticalAlign: 'middle'}}/>
    </Box>
  );
}

const Footer = () => {

  return (
    <Box sx={{ position: "absolute", right: "0%", bottom: "0.2rem"}}>
      <Container>
        <Copyright />
      </Container>
    </Box>
  );
}

export default Footer;