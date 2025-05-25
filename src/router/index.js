import React from "react";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "../screens/page-not-found/page-not-found";
import {
  ROUTE_DASHBOARD,
  ROUTE_MEMBER_MANAGEMENT,
  ROUTE_HEADER,
  ROUTE_LOGIN,
  ROUTE_SIGNUP,
} from "../constants/pathConstants";
import Dashboard from "../screens/dashboard/dashboard";
import MemberManagement from "../screens/member-management/member-management";
import Login from "../screens/login/login";
import SignUp from "../screens/signup/signup";

import { useAuth } from "../context/authContext";
import Header from "../common/header/header";

const Routing = () => {
  const { isAuthenticated } = useAuth();
  return (
    <>
      {isAuthenticated ? (
        <React.Fragment>
          <Routes>
            <Route exact path={ROUTE_DASHBOARD} element={<Dashboard />} />
            <Route exact path={ROUTE_MEMBER_MANAGEMENT} element={<MemberManagement />} />
            <Route exact path={ROUTE_HEADER} element={<Header />} />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Routes>
            <Route exact path={ROUTE_LOGIN} element={<Login />} />
            <Route exact path={ROUTE_SIGNUP} element={<SignUp />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </React.Fragment>
      )}
    </>
  );
};

export default Routing;
