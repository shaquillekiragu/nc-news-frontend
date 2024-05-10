import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { UsernameProvider } from "./contexts/LoginContext.jsx";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UsernameProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UsernameProvider>
);
