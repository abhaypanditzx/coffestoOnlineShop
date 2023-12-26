import React from "react";
import { UserProvider } from "./components/UserContext.jsx";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./custom.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <UserProvider>
        <App />
      </UserProvider>
    </React.StrictMode>
  </BrowserRouter>
);
