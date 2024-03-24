import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Line from "./components/line";
import logo from "./assets/Logo.png";
import Sidebar from "./components/sidebar/sidebar";
import MultiActionAreaCard from "./components/card/card";
import WhatsHappening from "./components/card/whatsonyourmindCard";
import RowCard from "./components/card/smallerCard";
import SocialPostCard from "./components/card/smallTextPostCard";
import DateCalendarValue from "./components/calender/calender";

function App() {
  return (


    <div>
      {/* Header area with logo and WhatsHappening component */}
      <div
        className="header"
        style={{
          display: "flex",
          alignItems: "center",
          paddingLeft: "30px",
          paddingTop: "10px",
        }}
      >
        {/* logo */}
        <img src={logo} alt="logo_inspirely" width={100} />

        {/* WhatsHappening */}
        <div
          style={{
            marginLeft: "80px",
            marginBottom: "30px",
            width: "350px",
          }}
        >
          {/* Adjust marginLeft to suit your spacing needs */}
          <WhatsHappening />
        </div>
      </div>
      <div style={{ display: "flex" }}>
        {/* Parent container with flex display */}
        {/* Sidebar */}
        <Sidebar />

        {/* Div for posts area */}
        <div
          className="mainBlockPostsArea"
          style={{
            display: "flex",

            position: "relative",
            paddingLeft: "55px",
          }}
        >
          <div
            className="leftBlock"
            style={{
              width: "430px",
              height: "100vh",
            }}
          >
            <MultiActionAreaCard />
            <div style={{ height: "50px" }}></div>
            <RowCard />
          </div>
          <div
            className="rightBlock"
            style={{
              height: "100vh",

              width: "430px",
            }}
          >
            <SocialPostCard />
          </div>
        </div>
        <div className="line" style={{ paddingTop: "0px" }}>
          <Line orientation="v" length={800} />
        </div>
      </div>
      <div style={{ position: "relative", left: "1075px", bottom: "800px" }}>
        <DateCalendarValue />
        <Line orientation="h" length={300} />
      </div>
    </div>
  );
}

export default App;
