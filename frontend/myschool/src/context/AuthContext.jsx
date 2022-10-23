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

  const [empToken, setEmpToken] = useState(() =>
  localStorage.getItem("empToken")
    ? JSON.parse(localStorage.getItem("empToken"))
    : null
);

  const [teacher, setTeacher] = useState(()=>localStorage.getItem("empToken")
  ? jwt_decode(localStorage.getItem("empToken"))
  : null)

  const navigate = useNavigate();
  const [userID, setUserID] = useState('')


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








  const empLogout=useCallback(()=>{
    setAuthToken(null)
    setTeacher(null)
    localStorage.removeItem("empToken");
    navigate("/");
  },[navigate])
  
  




const updateEmpToken=useCallback(async()=>{
  const response = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refresh: empToken?.refresh }),
  });
  const data = await response.json()
  if (response.status === 200){
    setEmpToken(data)
    setTeacher(data.access)
    localStorage.setItem("empToken", JSON.stringify(data))
  }else{
    empLogout()
  }
},[empLogout,empToken])



useEffect(()=>{
  let interval = setInterval(()=>{
    if(empToken){
      updateEmpToken()
    }
  }, 100000 * 2)
  return()=> clearInterval(interval)
},[empToken, updateEmpToken])






  useEffect(() => {
    let interval = setInterval(() => {
      if (authToken) {
        updateToken();
      }
    }, 100000 * 2);
    return () => clearInterval(interval);
  }, [authToken, updateToken]);

  const ContextData = {
    user: user,
    admin: admin,
    authToken: authToken,
    teacher:teacher,
    userID:userID,
    empToken:empToken,
    setAdmin: setAdmin,
    setUser: setUser,
    setAuthToken: setAuthToken,
    adminLogout: adminLogout,
    setTeacher:setTeacher,
    empLogout:empLogout,
    setUserID:setUserID,
    setEmpToken:setEmpToken,
  };

  return (
    <AuthContext.Provider value={ContextData}>{children}</AuthContext.Provider>
  );
};
