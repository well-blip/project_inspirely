import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GroupPage from "./components/spaces/IndividualGroupSpace/GroupPage";
import Spaces from "./pages/spaces";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Spaces />} />{" "}
        <Route path="/spaces" element={<Spaces />} />
        <Route path="/group" element={<GroupPage />} />
      </Routes>
    </Router>
    
  );
}

export default App;
