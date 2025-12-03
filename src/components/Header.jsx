import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/spicevillage.png";
import "../styles/header.css";

export default function Header() {
  return (
    <header className="sv-header">
      <div className="sv-header-inner">

        <img src={logo} alt="Spice Village" className="sv-logo" />

        <nav className="sv-nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/videos">Videos</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

      </div>
    </header>
  );
}
