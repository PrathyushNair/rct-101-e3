import React, { createContext } from "react";
import { Navigate } from "react-router-dom";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  let [email,setEmail]=React.useState("")
  let[password,setPassword]=React.useState("")
  let [auth,setAuth]=React.useState(false)
  let handlelogin=()=>{
    setAuth(true)
    return <Navigate to="/"></Navigate>
  }
  let handlelogout=()=>{
    setAuth(false)
  }
  return <AuthContext.Provider value={{auth,setAuth,setEmail,password,setPassword,handlelogin,handlelogout}}>{children}</AuthContext.Provider>;
};
