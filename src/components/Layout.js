import React, { Children } from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ footer = true, header = true, children }) {
  return (
    <div>
      {header ? <Header /> : ""}
      {children}
      {footer ? <Footer /> : ""}
    </div>
  );
}

export default Layout;
