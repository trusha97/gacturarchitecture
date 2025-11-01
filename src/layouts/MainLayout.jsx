// src/components/Layout.jsx
import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "./MainLayout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header/>
      <main>{children}</main>
       <div className='all-section-main-div3'>
        <div className="vertical-lines111">
        <div className="line302"></div>
        <div className="line302"></div>
        <div className="line302"></div>
        <div className="line302"></div>
      </div>
      <Footer/>
      </div>
    </>
  );
};

export default Layout;
