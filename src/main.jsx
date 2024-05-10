import React from "react";
import ReactDOM from "react-dom/client";
import { UsernameProvider } from "./contexts/LoginContext.jsx";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UsernameProvider>
    <App />
  </UsernameProvider>
);
