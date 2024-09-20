import React from "react";
import "./Navbar.css";
import navlogo from "../../assets/nav-logo.svg";
import navprofile from "../../assets/nav-profile.svg";
import { Link } from "react-router-dom";
import { frontend_url } from "../../App";
const Navbar = () => {
  return (
    <div className="navbar">
      <Link style={{ textDecoration: "none" }} to={frontend_url}>
        <img src={navlogo} alt="" className="nav-logo" />
      </Link>
      <img src={navprofile} alt="" className="nav-profile" />
    </div>
  );
};

export default Navbar;
