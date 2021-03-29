import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import SiteHead from "./SiteHead";

const Layout = ({ children }) => (
  <>
    <SiteHead />
    <div className="container">
      <Header />
      {children}
    </div>
    <Footer />
  </>
);

export default Layout;
