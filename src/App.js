import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Board from "./components/board";
import BoardOneColumn from "./components/boardOneColumn";
import './components/style.css';
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from './components/Hero';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
    <BrowserRouter>
    <Routes>
      <Route path="/zoom" element={<div id="main"><BoardOneColumn></BoardOneColumn><Footer></Footer></div>}></Route>
      <Route path="/" element={<div className="App" id="main"><Board></Board><Footer></Footer></div>}></Route>
    </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
