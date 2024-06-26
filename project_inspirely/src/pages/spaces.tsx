import React from "react";
import Body from "../components/spaces/body.tsx";
import Sidebar from "../components/spaces/sidebar.tsx";
import "./spaces.css"; // Assume you have a CSS file for Spaces

const Spaces = () => {
  return (
    <div className="spaces-container">
      <Sidebar />
      <Body />
    </div>
  );
};

export default Spaces;
