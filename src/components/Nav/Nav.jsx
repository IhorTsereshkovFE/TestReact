import React from "react";
import logotip from "../../assets/Vector.png";
import "./Nav.scss";
import menu from "../../assets/menu.png";

function Nav() {
  return (
    <nav>
      <div className="logo">
        <img src={logotip} alt="logotip" />
      </div>
      <div className="link">
        <div className="links">
          <a href="#">How it Works</a>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Blog</a>
          <a href="#">Log In</a>
        </div>
        <button>Sign In</button>
      </div>
      <div className="menu">
        <img src={menu} alt="menu" />
      </div>
    </nav>
  );
}

export default Nav;
