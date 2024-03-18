import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GroupPage from "./components/spaces/IndividualGroupSpace/GroupPage";
import Spaces from "./pages/spaces";

declare global {
  interface Window {
    perfMetrics: {
      onFirstInputDelay: (
        callback: (delay: number, event: Event) => void
      ) => void;
    };
  }
}

function App() {
  useEffect(() => {
    // Assuming perfMetrics is available globally
    if (window.perfMetrics && window.perfMetrics.onFirstInputDelay) {
      window.perfMetrics.onFirstInputDelay(function (delay, evt) {
        // Example: Replace 'ga' with your actual analytics call
        console.log("FID:", delay, "Event Type:", evt.type);
        // Your analytics tracking code here, e.g., Google Analytics
      });
    }
  }, []);

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
