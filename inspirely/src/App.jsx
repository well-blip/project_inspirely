import React from "react"
import "./App.css";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import Signup2 from "./pages/Signup2";
import { Routes, Route } from "react-router-dom";
import Protected from "./components/Protected";

function App() {
  return (
    //route configurations
    <Routes>
      <Route path="/" element={<Protected />} />
      <Route path="/" index element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signup2" element={<Signup2 />} />
    </Routes>
  );
}

export default App; 