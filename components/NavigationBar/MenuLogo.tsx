import React from "react";
import logoStyle from "../../styles/Navbar.module.css";

const MenuLogo = () => {
  return (
    <div className="logo">
      <img
        className={logoStyle.menuLogo}
        src={"/assets/images/Hemlock_Logo.svg"}
      ></img>
    </div>
  );
};
export default MenuLogo;
