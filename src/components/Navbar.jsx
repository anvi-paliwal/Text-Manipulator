import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
const Navbar = ({ mode, toggleMode }) => {
  return (
    <div>
      <nav className={`navbar  navbar-${mode} bg-${mode} flex-nowrap`}>
        <div className=" d-flex align-items-center  gap-3 px-2">
          <Link className="navbar-brand" to="/">
            TextManipulator
          </Link>
          <NavLink
            className="nav-link "
            style={({ isActive }) => {
              return isActive ? { color: "#0d6efd", fontWeight: "bold" } : {};
            }}
            aria-current="page"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="nav-link"
            style={({ isActive }) => {
              return isActive ? { color: "#0d6efd", fontWeight: "bold" } : {};
            }}
          >
            About
          </NavLink>
        </div>
        <div
          className={`form-check form-switch text-${
            mode === "light" ? "dark" : "light"
          } justify-content-end`}
        >
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={toggleMode}
          />
          <label
            className="form-check-label d-none d-sm-block"
            htmlFor="flexSwitchCheckDefault"
          >
            {mode === "light" ? "Light Mode" : "Dark Mode"}
          </label>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
