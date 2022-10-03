import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import csl from "./images/CSL.png"
import useStyles from '../styles/styles';

function Copyright() {
  const classes = useStyles();
  return (
    <Typography variant="h6" color="text.secondary" align="center"  >
      {'Powered by  '}
      <img src={csl} alt="My Team" className={classes.iconImage} />
    </Typography>
  );
}

const Footer = () => {

  return (
    <Box sx={{ position: "absolute", bottom: "0.2rem" }}>
      <Container>
        <Copyright />
      </Container>
    </Box>
  );
}

export default Footer;