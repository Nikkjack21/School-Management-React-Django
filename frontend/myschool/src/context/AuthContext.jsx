import { useState } from "react";
import { createContext } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useCallback } from "react";

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(() =>
    localStorage.getItem("authToken")
      ? JSON.parse(localStorage.getItem("authToken"))
      : null
  );
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(() =>
    localStorage.getItem("authToken")
      ? jwt_decode(localStorage.getItem("authToken"))
      : null
  );

  const navigate = useNavigate();

  const adminLogout = useCallback(() => {
    setAuthToken(null);
    setAdmin(null);
    localStorage.removeItem("authToken");
    localStorage.removeItem("access_token");
    navigate("/");
  }, [navigate]);

  let updateToken = useCallback(async () => {
    const response = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refresh: authToken?.refresh }),
    });
    const data = await response.json();
    if (response.status === 200) {
      setAuthToken(data);
      setAdmin(jwt_decode(data.access));
      localStorage.setItem("authToken", JSON.stringify(data));
    } else {
      adminLogout();
    }
  }, [authToken, adminLogout]);

  useEffect(() => {
    let interval = setInterval(() => {
      if (authToken) {
        updateToken();
      }
    }, 10000 * 2);
    return () => clearInterval(interval);
  }, [authToken, updateToken]);

  const ContextData = {
    user: user,
    admin: admin,
    authToken: authToken,
    setAdmin: setAdmin,
    setUser: setUser,
    setAuthToken: setAuthToken,
    adminLogout: adminLogout,
  };

  return (
    <AuthContext.Provider value={ContextData}>{children}</AuthContext.Provider>
  );
};
