// src/components/Layout.jsx
import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FaqAccordion from "../components/Faq/FaqSection";
import Reviesection from "../components/Review/Reviesection";

const Layout = ({ children }) => {
  return (
    <>
      {/* <FaqAccordion/> */}
      {/* <Reviesection/> */}
      <Header/>
      <main>{children}</main>
      <Footer/>
    </>
  );
};

export default Layout;
