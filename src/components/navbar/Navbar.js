import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <img
        src={"https://cdn.iconscout.com/icon/free/png-256/nike-202652.png"}
        className="navbar-icon"
      />
      <p id="site-name">Zain Shoe Store</p>
    </div>
  );
};

export default Navbar;
