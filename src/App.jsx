import React, { useState } from "react";
import Header from "./component/Header";
import Hero from "./component/Hero";
import About from "./component/About";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import { Routes, Route } from "react-router-dom";
export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    
    <div>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<Hero darkMode={darkMode}/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/Contact" element={<Contact/>}/>      
      </Routes>
    </div>
  );
}
