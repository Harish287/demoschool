import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import Gallery from "./components/Gallery";
import Ourcourse from "./components/Ourcourse";
import About from "./components/About";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        {/* <br/> */}
        <div>
          <Routes>
          
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/ourcourse" element={<Ourcourse/>} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
