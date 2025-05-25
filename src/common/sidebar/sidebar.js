import React, { useEffect, useState } from "react";
// import Logo from "../../assets/images/logo.png";
// import MenuIcon from "../../assets/images/menu.png";
import "./sidebar.scss";
import { sideBarMenu, sideMenuBottom } from "../../constants/sideBarConstants";
import { useLocation, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import $ from "jquery";
import { useAuth } from "../../context/authContext";
import { useDispatch } from "react-redux";
import { setAllEmployee } from "../../store/actions/empActions";
const SideBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [sideMenus, setSideMenus] = useState([]);
  const { logout } = useAuth();

  useEffect(() => {
    $("#toggleMenus").click(function () {
      $(".menu-icon").toggleClass("main1");
    });
    setSideMenus(sideBarMenu);
  }, []);

  const navToPage = (item) => {
    const data = sideMenus.map((i) => {
      if (i.path === item.path) {
        return { ...i, isSubMenuOpen: !item.isSubMenuOpen };
      } else {
        return { ...i, isSubMenuOpen: false };
      }
    });

    setSideMenus(data);

    navigate(item.path);
    if (item.title === "Logout") {
      onLogout();
    }
  };

  const resetReducerState = () => {
    dispatch(setAllEmployee([]));
  };

  const onLogout = () => {
    logout();
    resetReducerState();
  };
  const isSubMenuActive = (subMenus, currentPath) => {
    return subMenus?.some((subMenu) => subMenu.path === currentPath);
  };

  const checkSubMenuMatch = (subMenus) => {
    return isSubMenuActive(subMenus, location.pathname);
  };

  const menus = (data) => {
    return data.map((i) => {
      const isParentActive = checkSubMenuMatch(i.subMenus);
      return (
        <li key={i.title}>
          <NavLink
            to={i.path}
            activeClassName="active"
            className={isParentActive ? "active" : ""}
            onClick={() => navToPage(i)}
          >
            {i.icon}
            <span className="label-menus"> {i.title}</span>
            {i?.subMenus?.length > 0 && (
              <em
                className={
                  i.isSubMenuOpen
                    ? "fa fa-chevron-up fa-arrow"
                    : "fa fa-chevron-down fa-arrow"
                }
              ></em>
            )}
          </NavLink>
          <div className="sub-menus">
            {i.isSubMenuOpen &&
              i.subMenus?.map((menu) => {
                return (
                  <NavLink key={menu.title} to={menu.path} activeClassName="">
                    <i className="fa fa-square" aria-hidden="true"></i>
                    <span className="sub-label"> {menu.title}</span>
                  </NavLink>
                );
              })}
          </div>
        </li>
      );
    });
  };

  const [isOpen, setIsOpen] = useState(false);

  // const ToggleSidebar = () => {
  //   setIsOpen(!isOpen);
  //   $(".wrapper").toggleClass("wrapper-fwm");
  //   $(".feed-header").toggleClass("feed-toggle-head");
  //   $(".feed-content").toggleClass("feed-toggle");
  //   $("body").toggleClass("grid-port");
  // };
  return (
    <div className="nav-bar">
      {/* <div className={`logo-content ${isOpen ? "logo-toggle" : ""}`}>
        <img src={Logo} />
        <span className="menu-icon" id="toggleMenus" onClick={ToggleSidebar}>
          <img src={MenuIcon} />
        </span>
      </div> */}
      <div className={`nav-bar-menus ${isOpen ? "toggle-sidebar" : ""}`}>
        <ul className="thin-scroll">{menus(sideMenus)}</ul>
        <ul className="bottom-menus">{menus(sideMenuBottom)}</ul>
      </div>
    </div>
  );
};

export default SideBar;
