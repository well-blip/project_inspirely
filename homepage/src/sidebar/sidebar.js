import "./sidebar_style.css";
import React, { useState } from "react";
import {
  RiHome4Line,
  RiTeamLine,
  RiCalendar2Line,
  RiFolder2Line,
  RiUserFollowLine,
  RiPlantLine,
  RiStackLine,
  RiUserUnfollowLine,
} from "react-icons/ri";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
import { Sidebar, SubMenu, Menu, MenuItem } from "react-pro-sidebar";
import { grey } from "@mui/material/colors";

function Sidebars() {
  const [collapsed, setCollapsed] = useState(false);
  const [toggled, setToggled] = useState(false);

  const handleCollapsedChange = () => {
    setCollapsed(!collapsed);
  };

  const handleToggleSidebar = (value) => {
    setToggled(value);
  };

  return (
    <div style={{ display: "flex", zIndex: 2 }}>
      <Sidebar
        className={`app ${toggled ? "toggled" : ""}`}
        style={{
          height: "100%",
          position: "absolute",
          backgroundColor: grey,
          top: 60,
        }}
        collapsed={collapsed}
        toggled={toggled}
        handleToggleSidebar={handleToggleSidebar}
        handleCollapsedChange={handleCollapsedChange}
        width={collapsed ? "80px" : "200px"} // Set the width when expanded
        collapsedWidth="80px" // Set the width when collapsed
      >
        <main>
          <Menu>
            {collapsed ? (
              <MenuItem
                icon={<FiChevronsRight />}
                onClick={handleCollapsedChange}
              />
            ) : (
              <MenuItem onClick={handleCollapsedChange}>
                <div
                  style={{
                    padding: "9px",
                    fontWeight: "bold",
                    fontSize: 14,
                    letterSpacing: "1px",
                    background: grey,
                  }}
                >
                  Inspirely
                </div>
              </MenuItem>
            )}
            <hr />
          </Menu>

          <Menu>
            <MenuItem icon={<RiHome4Line />}>Dashboard</MenuItem>
            <SubMenu defaultOpen label={"Courses"} icon={<RiTeamLine />}>
              <MenuItem icon={<RiUserFollowLine />}>Active </MenuItem>
              <MenuItem icon={<RiUserUnfollowLine />}>Biology</MenuItem>
              <MenuItem icon={<RiCalendar2Line />}>Probation Period</MenuItem>
            </SubMenu>
            <SubMenu defaultOpen label={"Records"} icon={<RiFolder2Line />}>
              <MenuItem icon={<RiStackLine />}>Senior Students</MenuItem>
              <MenuItem icon={<RiPlantLine />}>Junior Students</MenuItem>
            </SubMenu>
          </Menu>
        </main>
      </Sidebar>
    </div>
  );
}

export default Sidebars;
