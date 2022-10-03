import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: "6rem"}}>
      <AppBar sx={{
        position: "absolute",
        top: "0",
      }}>
        <Toolbar sx={{
          textAlign: "center"
        }}>
          <Typography variant="h1" component="div" sx={{ 
            flexGrow: 1, 
            margin: "0 auto",
            textAlign: "center"
           }}>
            LEADERBOARD
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;