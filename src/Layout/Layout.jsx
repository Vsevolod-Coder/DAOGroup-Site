import React from "react";
import Header from "../Components/Header/Header.jsx";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
