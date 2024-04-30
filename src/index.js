import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";
import { SnackbarProvider } from "notistack";
import { Provider } from "react-redux";
import store from "./store/store";

const theme = createTheme({});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          autoHideDuration={2000}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <CssBaseline />
          <Provider store={store}>
            <App />
          </Provider>
        </SnackbarProvider>
      </ThemeProvider>
    </BrowserRouter>
);
