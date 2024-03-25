import React from "react"
import "./App.css";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup";
import Signup2 from "./pages/Signup2";
import { Routes, Route } from "react-router-dom";
import Protected from "./components/Authenticate/Protected";
import ForgotPassword from "./pages/ForgotPassword.jsx";

function App() {
  return (
    //route configurations
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signup2" element={<Signup2 />} />
      <Route path="/reset" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App; 