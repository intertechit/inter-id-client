import "./styles/index.scss";

import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "./context/ThemeContext";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
