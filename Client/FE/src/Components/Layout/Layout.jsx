import React from "react";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <div>
      <div className="main">{children}</div>
      <Footer />
    </div>
  );
};
