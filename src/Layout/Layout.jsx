<<<<<<< HEAD
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
=======
import React from 'react'
import Header from "../Components/MainPage/Header/Header"
import Footer from "../Components/MainPage/Footer/Footer"

const Layout = ({children}) => {
  return (
    <>
        <Header />
        {children}
        <Footer />
    </>
  )
}

export default Layout
>>>>>>> 7072a8524dad2fdaf7354c6141427224480f0416
