import React from "react";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="mt-5 bg-dark p-3 text-light text-center">
      &copy; All right reserved {year} || Made by Beyond Himalaya Tech
    </div>
  );
};
