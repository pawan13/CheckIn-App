import React from "react";
import "./Header.css"; // Import your CSS file for styling
import expoLogo from "../../assets/expoLogo.jpeg";

const Header = () => {
  return (
    <div className="header">
      <img src={expoLogo} width="30%" alt="Logo" className="logo" />
    </div>
  );
};

export default Header;
