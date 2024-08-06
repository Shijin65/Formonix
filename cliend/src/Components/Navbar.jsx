import React, { useEffect, useState } from "react";
import image from "../assets/europass-logo.png";
import { Link, useNavigate } from "react-router-dom";
export default function Navbar() {
  const [isLogin,setIslogin]=useState(false)
  const navigate=useNavigate()
  useEffect(()=>{
    if(sessionStorage.getItem('token')){
      setIslogin(true)
    }
  },[])
  const handlelogout=()=>{
    sessionStorage.clear()
    navigate('/')
  }
  return (
    <div className="navbar bg-slate-800 text-primary-content px-5 ">
      <img
        src={image}
        alt=""
        className="h-32 me-3 rounded-full"
        style={{ height: "50px" }}
      />
      <a href="/" className="navbar-brand ">
        <h1 className="m-0 text-indigo-900 ">
          <span className="text-white">EURO</span>PASS
        </h1>
      </a>
      <a >      {isLogin&&<h3 className="text-light" onClick={handlelogout}> <i class="fa-solid fa-power-off"></i>logout</h3>}
      </a>
      
     
      
    </div>
  );
}
