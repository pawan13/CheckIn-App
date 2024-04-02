import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="mt-5 bg-dark p-3 text-light text-center">
      &copy; All right reserved {year} || Made by{" "}
      <a
        href="https://www.beyondhimalayatech.com.au"
        target="_blank"
        rel="noopener noreferrer"
      >
        Beyond Himalaya Tech
      </a>
    </div>
  );
};
export default Footer;
