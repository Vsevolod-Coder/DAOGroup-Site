import React, { Children } from "react";
import Header from "../components/Header/Header";

const Layout = () => {
    
  return (
    <>
      <Header />
      {Children}
      <Footer />
    </>
  );
};

export default Layout;
