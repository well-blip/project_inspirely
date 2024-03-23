import React from "react"
import "./App.css";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import Signup2 from "./pages/Signup2";
import { Routes, Route } from "react-router-dom";
import Protected from "./components/Authenticate/Protected";
import Homepage from "./components/Homepage.jsx";
import GroupPage from "./components/spaces/IndividualGroupSpace/GroupPage";
import Spaces from "./pages/spaces";
import ForgotPassword from "./pages/ForgotPassword.jsx";

function App() {
  return (
    //route configurations
    <Routes>
      <Route path="/dashboard" index element={<Dashboard />} />
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signup2" element={<Signup2 />} />
      <Route path="/homepage" element={<Homepage />} />
      <Route path="/spaces" element={<Spaces />} />
      <Route path="/group" element={<GroupPage />} />
      <Route path="/reset" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App; 