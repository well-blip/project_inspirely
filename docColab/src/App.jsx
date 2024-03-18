import { useState } from "react";
import "./App.css";
import BoxBasic from "../components/listTemp";
import { BrowserRouter as Router } from "react-router-dom"; // Change this line

function App() {
  return (
    <Router>
      <BoxBasic />
    </Router>
  );
}

export default App;
