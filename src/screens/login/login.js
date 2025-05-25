import React, { useState } from "react";
import { ROUTE_DASHBOARD, ROUTE_SIGNUP } from "../../constants/pathConstants";
import { useNavigate } from "react-router-dom";
import "./login.scss";
import { validateEmail, validatePassword } from "../../utils/utils";
import { Checkbox } from "@mui/material";
import { useAuth } from "../../context/authContext";
const initialState = {
  username: "",
  password: "",
};

const Login = () => {
  const navigate = useNavigate();
  const { authenticate } = useAuth();
  const [loginData, setLoginData] = useState(initialState);
  const [isLoginFail, setIsLoginFail] = useState(false);
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const onChangeText = (event) => {
    event.preventDefault();
    setLoginData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const onValidate = (event) => {
    event.preventDefault();

    if (
      !validateEmail(loginData.username) ||
      !validatePassword(loginData.password)
    ) {
      setErrors({
        username: !loginData.username
          ? "Email or Username is required."
          : !validateEmail(loginData.username)
          ? "Enter valid Email or Username"
          : "",
        password: !loginData.password
          ? "Password is required."
          : !validatePassword(loginData.password)
          ? "Enter a valid password: At least 8 characters with one lowercase, one uppercase, one number, and one special character (!@#$%^&*)."
          : "",
      });
      return;
    }
  };

  const resetState = () => {
    setLoginData(initialState);
    setErrors({
      username: "",
      password: "",
    });
  };

  const onLogin = async (e) => {
    e.preventDefault();

    resetState();
    await authenticate(loginData.username, loginData.password)
      .then((data) => {
        console.log(data);
        setIsLoginFail(false);
        navigate(ROUTE_DASHBOARD);
      })
      .catch((err) => {
        console.log(err);
        setIsLoginFail(true);
      });
  };

  const navToSignUp = () => {
    // navigate(-1);
    navigate(ROUTE_SIGNUP);
   };

  return (
    <div className="container-fluid login-container">
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
                <form onSubmit={onValidate}>
                  <div className="mb-4 block">
                    <label htmlFor="username" className="form-label fw-6">
                      Email or Username
                    </label>
                    <input
                      type="email"
                      className="form-control input-field"
                      id="username"
                      name="username"
                      form="novalidateform"
                      required
                      value={loginData.username}
                      onChange={onChangeText}
                      onBlur={onValidate}
                      autoComplete="off"
                    />
                    {errors.username && (
                      <div style={{ color: "red", fontSize: "12px" }}>
                        {errors.username}
                      </div>
                    )}
                  </div>
                  <div className="mb-4 block">
                    <label htmlFor="password" className="form-label fw-6">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control input-field"
                      id="password"
                      name="password"
                      form="novalidateform"
                      required
                      onChange={onChangeText}
                      value={loginData.password}
                      onBlur={onValidate}
                    />
                    {errors.password && (
                      <div style={{ color: "red", fontSize: "12px" }}>
                        {errors.password}
                      </div>
                    )}
                  </div>
                  {isLoginFail && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        alignSelf: "center",
                      }}
                    >
                      Invalid credentials..!
                    </div>
                  )}
                  <div className="block start-end mb-4">
                    <div className="float-start">
                      <Checkbox className="form-check-input mr-5" />
                      <label htmlFor="remember" className="form-label">
                        Remember Me
                      </label>
                    </div>
                    <div className="float-end">
                      <button
                        type="submit"
                        onClick={onLogin}
                        className="btn btn-primary btn-radius pl-15 pr-15 log-eff"
                      >
                        <span>LOGIN</span>
                      </button>
                    </div>
                  </div>
                  <div className="mb-4 block place-center align-center">
                    <span className="float-start"> No Account yet? </span>
                    <a className="btn btn-link btn-sm pl-5 pr-5 float-start link-eff" onClick={()=>{navToSignUp()}}>
                      SIGN UP
                    </a>
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

export default Login;
