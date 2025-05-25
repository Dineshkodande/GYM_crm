import React from "react";
import { useAuth } from "../context/authContext";
import SideBar from "../common/sidebar/sidebar";
import Routing from "../router/index";
// import Feed from "../common/feed/feed";
import { setAuthInstance } from "../utils/authHelper";
import Header from "../common/header/header";

const RootIndex = () => {
  const { isAuthenticated } = useAuth();
  const auth = useAuth();
  setAuthInstance(auth);

  return (
    <div className="container-fluid">
      <div className="row">
        {isAuthenticated && <Header />}
        {isAuthenticated && <SideBar />}
        <Routing />
        {/* {isAuthenticated && (
          <div className="feed-box">
            <Feed />
          </div>
        )} */}
      </div>
    </div>
  );
};

export default RootIndex;
