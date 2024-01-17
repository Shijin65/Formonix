import React from "react";
import image from "../assets/europass-logo.png";
export default function Navbar() {
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
    </div>
  );
}
