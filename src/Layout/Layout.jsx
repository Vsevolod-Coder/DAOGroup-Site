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
