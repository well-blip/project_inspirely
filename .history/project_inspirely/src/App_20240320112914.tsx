import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GroupPage from "./components/spaces/IndividualGroupSpace/GroupPage";
import Spaces from "./pages/spaces";
import AssignmentNotificationCard from "./components/spaces/Notifications/AssignmentNotificationCard";

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Spaces />} />{" "}
    //     <Route path="/spaces" element={<Spaces />} />
    //     <Route path="/group" element={<GroupPage />} />
    //   </Routes>
    // </Router>
   // <GroupPage />
    <AssignmentNotificationCard/>
  );
}

export default App;
