import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Board from "./components/board";
import './components/style.css';
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from './components/Hero'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <div className="App" id='main'> 
        <Board></Board>
        <Footer></Footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
