import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";

import { RiTeamLine, RiUser3Line } from 'react-icons/ri';
import { FiHome, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

import "react-pro-sidebar/dist/css/styles.css";
import "./Navbar.css";

const Navbar = () => {

  const [menuCollapse, setMenuCollapse] = useState(false)


  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <div className="navbar">
      <ProSidebar collapsed={menuCollapse}>
        <SidebarHeader>
          <div className="logotext">
            <p>{menuCollapse ? "FPLD" : "FPL Data"}</p>
          </div>
          <div className="closemenu" onClick={menuIconClick}>
            {menuCollapse ? (
              <FiArrowRightCircle/>
            ) : (
              <FiArrowLeftCircle/>
            )}
          </div>
        </SidebarHeader>
        <SidebarContent>
        <Menu iconShape="square">
          <MenuItem active={true} icon={<FiHome />}>
            Home <Link to="/"/>
          </MenuItem>
          <MenuItem icon={<RiUser3Line />}>Manager<Link to="/manager"/></MenuItem>
          <MenuItem icon={<RiTeamLine />}>Standings<Link to="/standings"/></MenuItem>
        </Menu>
        </SidebarContent>
      </ProSidebar>
    </div>
  )
}

export default Navbar;
