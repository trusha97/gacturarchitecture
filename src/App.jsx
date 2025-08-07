import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/MainLayout";
import FourZeroFour from "./pages/FourZeroFour/FourZeroFour";
import Home from "./pages/page";
import "./App.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// import Loader from "./components/Loader/Loader";

function App() {
  return (
    <Layout>
      {/* <Loader/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<FourZeroFour/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
