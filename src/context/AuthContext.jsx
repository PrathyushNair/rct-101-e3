import React, { createContext } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  let navigate=useNavigate()
  let [email,setEmail]=React.useState("")
  let[password,setPassword]=React.useState("")
  let [auth,setAuth]=React.useState(false)
  let handlelogin=()=>{
    setAuth(true)
    navigate("/")
  }
  let handlelogout=()=>{
    setAuth(false)
    navigate('/login')
  }
  return <AuthContext.Provider value={{auth,setAuth,setEmail,password,setPassword,handlelogin,handlelogout}}>{children}</AuthContext.Provider>;
};
