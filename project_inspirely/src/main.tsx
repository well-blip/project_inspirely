import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Auth from "./components/Authentication/Auth.tsx";
// import './index.css'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    {/* <Auth /> */}
  </React.StrictMode>
);
