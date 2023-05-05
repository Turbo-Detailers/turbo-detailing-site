import React from "react";
import logoStyle from "../../styles/Navbar.module.css";
import Image from "next/image";

const MenuLogo = () => {
  return (
    <div className="logo">
      <Image
        alt="Turbo Logo"
        className={logoStyle.menuLogo}
        src={"/assets/images/Hemlock_Logo.svg"}
      ></Image>
    </div>
  );
};
export default MenuLogo;
