import React from "react";
import logo from "../../assets/logo.jpg"; // Adjust the path to your logo file

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="mt-5 bg-dark p-3 text-light">
      <div className="d-md-flex justify-content-between align-items-center">
        <div className="mb-3 mb-md-0">
          <img src={logo} alt="Company Logo" className="logo" />
        </div>
        <div className="text-center">
          <p>
            &copy; All rights reserved {year} || Made by{" "}
            <a
              href="https://www.beyondhimalayatech.com.au"
              target="_blank"
              rel="noopener noreferrer"
            >
              Beyond Himalaya Tech
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
