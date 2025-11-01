import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/MainLayout";
import "./App.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'linearicons/dist/web-font/style.css';
import Home from "./pages/page";
import FourZeroFour from "./pages/FourZeroFour/FourZeroFour";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import ServicesTwo from "./pages/Services2/ServicesTwo";
import ServicesDetails from "./pages/ServicesDetails/ServicesDetails";
import Team from "./pages/Team/Team";
import Testimonials from "./pages/Testimonials/Testimonials";
import Faq from "./pages/FAQ/Faq";
import Portfolios from "./pages/PortFolios/Portfolios";
import PortFoliosTwo from "./pages/PortFolios2/PortFoliosTwo";
import SinglePortfolio from "./pages/SinglePortfolio/SinglePortfolio";
import Blogs from "./pages/Blogs/Blogs";
import BlogsTwo from "./pages/Blogs2/BlogsTwo";
import SinglePost from "./pages/SinglePost/SinglePost";
import SinglePostCreative from "./pages/SinglePostCreative/SinglePostCreative";
import Contact from "./pages/Contact/Contact";
// import Loader from "./components/Loader/Loader";

function App() {
  return (
    <Layout>
      {/* <Loader/> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/services2" element={<ServicesTwo/>}/>
        <Route path="/servicesdetails" element={<ServicesDetails/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/testimonials" element={<Testimonials/>}/>
        <Route path="/faq" element={<Faq/>}/>
        <Route path="/portfolios" element={<Portfolios/>}/>
        <Route path="/portfolios2" element={<PortFoliosTwo/>}/>
        <Route path="/singleportfolio" element={<SinglePortfolio/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/blogs2" element={<BlogsTwo/>}/>
        <Route path="/singlepost" element={<SinglePost/>}/>
        <Route path="/singlepostcreative" element={<SinglePostCreative/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/404page" element={<FourZeroFour/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
