import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.scss";
import { Checkbox } from "@mui/material";
import { ROUTE_LOGIN } from "../../constants/pathConstants";

const SignUp = () => {
  const navigate = useNavigate();
  const navToLogin = () => {
    // navigate(-1);
    navigate(ROUTE_LOGIN);
   };

  return (
    <div className="container-fluid sign-up-container">
      <div className="row">
        <div className="col-12 sm-dev-col col-sm-6 col-md-6 col-lg-6 float-start login-logo">
          <div className="">
            <h4 className="block text-center logo-text">Welcome to</h4>
            <h2 className="text-logo"> GYM</h2>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-6 col-lg-6 float-start panel-log">
          <div className="login-content block-center">
            <div className="block">
              <div className="card-body">
                <form>
                  <h3 className="block mb-20">Sign up</h3>
                  <div className="row">
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 float-start mb-15">
                      <label htmlFor="username" className="form-label fw-6">
                        Name
                      </label>
                      <input type="text" className="form-control input-field" />
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 float-start mb-15">
                      <label htmlFor="username" className="form-label fw-6">
                        Email or Username
                      </label>
                      <input
                        type="email"
                        className="form-control input-field"
                      />
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 float-start mb-15">
                      <label htmlFor="username" className="form-label fw-6">
                        Contact
                      </label>
                      <input
                        type="email"
                        className="form-control input-field"
                      />
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6 float-start mb-15">
                      <label htmlFor="password" className="form-label fw-6">
                       Create Password
                      </label>
                      <input
                        type="Create Password"
                        className="form-control input-field"
                      />
                    </div>
                    <div className="float-start">
                      <button
                        type="submit"
                        className="btn btn-primary btn-radius mt-15 pl-15 pr-15 log-eff"
                      >
                        <span>SIGN-UP</span>
                      </button>
                      <a className="btn btn-link btn-sm mt-10 pl-5 pr-5 float-end link-eff" onClick={()=>{navToLogin()}} >
                        LOGIN
                      </a>
                    </div>
                   
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
