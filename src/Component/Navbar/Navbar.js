import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import logo from "../image/globtech.png";

const Navbar = () => {
  return (
    <nav className={classes.navBar}>
      <div className={classes.navLoog}>
        <img src={logo} alt="Globtech" />
        <div>
          <h6>
            <span>Globe</span>Tech
          </h6>
          <p>Company Limited</p>
        </div>
      </div>
      <ul className={classes.navMenuItem}>
        {/* {(info) => console.log("info", info)} */}
        <li>
          <NavLink
            className={(info) => (info.isActive ? classes.activeNav : "")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(info) => (info.isActive ? classes.activeNav : "")}
            to="/service"
          >
            Service
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(info) => (info.isActive ? classes.activeNav : "")}
            to="/login"
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
