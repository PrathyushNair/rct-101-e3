import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Navbar from "../components/Navbar/Navbar";
const Login = () => {

  const {auth,password,setPassword,email,setEmail,handlelogin}=useContext(AuthContext)
  console.log(auth)
  return (
    <div>
    
      <input onChange={(e)=>setEmail(e.target.value)} data-cy="login-email" />
      <input onChange={(e)=>setPassword(e.target.value)}data-cy="login-password" />
      <button onClick={handlelogin} data-cy="login-submit">Login</button>
    </div>
  );
};

export default Login;
