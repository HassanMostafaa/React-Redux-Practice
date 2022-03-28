import React from "react";
import { NavLink } from "react-router-dom";
import "../Styles/nav.css";
export const Nav = () => {
  return (
    <nav className="nav container">
      <NavLink to="/">Home Page</NavLink>
      <NavLink to="/contacts">Contacts App</NavLink>

      <NavLink to="/counter">Counter App</NavLink>
    </nav>
  );
};
