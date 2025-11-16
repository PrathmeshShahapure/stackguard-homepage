import { useState } from "react";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Promo from "./components/Promo";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Platform from "./pages/Platform";

function App() {
  return (
    <div className="min-h-screen flex flex-col  ">
    
      <div className="fixed z-50 top-0 left-0 bg-white  w-full"> 
      <Promo />
      <Navbar />
      </div>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Platform />} />
      </Routes>
      
      
    </div>
  );
}

export default App;
