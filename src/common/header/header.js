import React, { useEffect, useState } from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";
import $ from "jquery";
const Header = () => {
  useEffect(() => {
    $("#toggleMenus").click(function () {
      $(".menu-btn").toggleClass("main1");
    });
    // setSideMenus(sideBarMenu);
  }, []);
  const [isOpen, setIsOpen] = useState(false);

  const ToggleSidebar = () => {
    setIsOpen(!isOpen);
    $(".nav-bar").toggleClass("toggle-sidebar");
  };
  return <div className="header">
    <h4 className="float-start m-0">GYM CRM</h4>
    <button className="menu-btn" id="toggleMenus" onClick={ToggleSidebar}>
    <i class="fa fa-bars" aria-hidden="true"></i>
    </button>
  </div>;
};

export default Header;
