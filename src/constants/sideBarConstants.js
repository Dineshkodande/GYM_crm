// import { ReactComponent as Dashboard } from "../assets/images/svg/dashboard.svg";
// import { ReactComponent as Logout } from "../assets/images/svg/logout.svg";

import {
  ROUTE_DASHBOARD,
  ROUTE_MEMBER_MANAGEMENT,
  ROUTE_LOGIN,
  ROUTE_SIGNUP
} from "./pathConstants";

export const sideBarMenu = [
  {
    title: "Dashboard",
    path: ROUTE_DASHBOARD,
    icon: '',
    isSubMenuOpen: false,
    subMenus: [],
  },
  {
    title: "Member Management",
    path: ROUTE_MEMBER_MANAGEMENT,
    icon: '',
    isSubMenuOpen: false,
    subMenus: [],
  }
];

export const sideMenuBottom = [
  {
    title: "Logout",
    path: ROUTE_LOGIN,
    icon: '',
  }
];
