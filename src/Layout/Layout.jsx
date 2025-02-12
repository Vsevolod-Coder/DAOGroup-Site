import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import SideBar from "../Components/SIdeBar/SideBar";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <div className="layout-container">
        <div className="main-content">
          <Header />
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
