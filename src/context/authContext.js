import React, { createContext, useContext, useEffect, useState, useRef } from "react";
import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js";
import awsUserPool from "../utils/awsUserPool";
import { ROUTE_LOGIN } from "../constants/pathConstants";
import { encryptData } from "../utils/encryptionUtils";
import { STORAGE_USER } from "../constants/storageConstants";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();
const AUTO_LOGOUT_TIME = 15 * 60 * 1000;

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);
  const lastActivityTimeRef = useRef(Date.now()); 
  const navigate = useNavigate();
  useEffect(() => {
    getSession().catch(() => {});
  }, []);

  useEffect(() => {
    if (!isAuthenticated || !session) return;

    const sessionCheckInterval = setInterval(() => {
      const currentTime = Date.now();

      const sessionExpirationTime = session.getIdToken().getExpiration() * 1000;

      if (currentTime - lastActivityTimeRef >= AUTO_LOGOUT_TIME) {
        logout();
      } else if (currentTime >= sessionExpirationTime) {
        refreshSession().catch(() => logout());
      }
    }, 1000);

    return () => clearInterval(sessionCheckInterval);
  }, [isAuthenticated, session]);

  useEffect(() => {
    const handleActivity = () => {
      lastActivityTimeRef.current = Date.now();
    };

    // window.addEventListener("mousemove", handleActivity);
    window.addEventListener("keydown", handleActivity);
    window.addEventListener("click", handleActivity);

    return () => {
      // window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("keydown", handleActivity);
      window.removeEventListener("click", handleActivity);
    };
  }, []);

  const saveUser = (session) => {
    return new Promise((resolve, reject) => {
      const idToken = session.getIdToken();
      const payload = JSON.parse(JSON.stringify(idToken));
      const encryptedPayload = encryptData(payload);

      localStorage.setItem(STORAGE_USER, encryptedPayload);
      setSession(session);
      resolve();
    });
  };

  const getSession = () => {
    return new Promise((resolve, reject) => {
      const user = awsUserPool.getCurrentUser();
      if (!user) return reject(new Error("No user is currently logged in."));

      user.getSession(async (err, session) => {
        if (err) return reject(err);
        await saveUser(session);
        setIsAuthenticated(true);
        setLoading(false);
        resolve(session);
      });
    });
  };

  const refreshSession = () => {
    return new Promise((resolve, reject) => {
      const user = awsUserPool.getCurrentUser();
      if (!user || !session) return reject(new Error("No session to refresh."));

      user.refreshSession(session.getRefreshToken(), async (err, refreshedSession) => {
        if (err) return reject(err);
        await saveUser(refreshedSession);
        resolve(refreshedSession);
      });
    });
  };

  const authenticate = (Username, Password) => {
    return new Promise(async (resolve, reject) => {
      const user = new CognitoUser({ Username, Pool: awsUserPool });
      const authDetails = new AuthenticationDetails({ Username, Password });

      await user.authenticateUser(authDetails, {
        onSuccess: async (result) => {
          setIsAuthenticated(true);
          await saveUser(result);
          resolve(result);
        },
        onFailure: (err) => {
          setIsAuthenticated(false);
          reject(err);
        },
        newPasswordRequired: resolve,
      });
    });
  };

  const logout = () => {
    const user = awsUserPool.getCurrentUser();
    if (user) user.signOut();
    setIsAuthenticated(false);
    setSession(null);
    navigate(ROUTE_LOGIN);
  };

  const getTokens = () => session;

  return (
    <AuthContext.Provider
      value={{
        authenticate,
        getSession,
        logout,
        isAuthenticated,
        loading,
        getTokens,
        setIsAuthenticated
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
