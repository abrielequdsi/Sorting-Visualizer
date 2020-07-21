import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Home/Home.js";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import {
  orange,
  blue,
  lightBlue,
  deepPurple,
  deepOrange,
} from "@material-ui/core/colors";

function App() {
  const palletType = "dark";
  const mainPrimaryColor = blue[200];
  const mainSecondaryColor = deepPurple[500];
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType,
      primary: {
        main: mainPrimaryColor,
      },
      secondary: {
        main: mainSecondaryColor,
      },
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
