import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green, purple, red, yellow } from "@mui/material/colors";

const {palette} = createTheme();
const customTheme = createTheme({
  palette: {
    mode: 'dark',
    // primary:red,
    // secondary:green,
    companyPurple: palette.augmentColor({ color: purple }),
    // Use this code if you want to use an arbitrary color
    copmanyPurple: palette.augmentColor({
      color: {
        main: "#4834d4"
      }
    }),
    companyYellow: palette.augmentColor({ color: yellow }),
    // Use this code if you want to use an arbitrary color
    companyYellow: palette.augmentColor({
      color: {
        main: "#f9ca24"
      }
    }),
    companyRed: palette.augmentColor({ color: red }),
    // Use this code if you want to use an arbitrary color
    companyRed: palette.augmentColor({
      color: {
        main: "#eb4d4b"
      }
    }),
    companyGreen: palette.augmentColor({ color: green }),
    // Use this code if you want to use an arbitrary color
    companyGreen: palette.augmentColor({
      color: {
        main: "#6ab04c"
      }
    })
  },
  typography: {
    fontSize: '2rem',
  },
  components: {
    MuiCard:{
      styleOverrides:{
        root:{
          // fontSize: '3rem',
        },
      },
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();