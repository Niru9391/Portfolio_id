import React, { useEffect, useState } from "react";
import profile from "../image/Img_nir.webp";
import Starsky from './Starsky'
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
export default function Hero({ darkMode }) {
  const [animateImage, setAnimateImage] = useState(false);
  const [animateUpperText, setAnimateUpperText] = useState(false);
  const [animateLowerText, setAnimateLowerText] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimateImage(true), 2000);
    setTimeout(() => setAnimateUpperText(true), 1000);
    setTimeout(() => setAnimateLowerText(true), 3000);
  }, []);

  return (
    <>
    <div
      className={`min-h-screen w-full flex items-center justify-center transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
 
      <img
        src={profile}
        alt="Profile"
        className={`w-40 h-40 rounded-full border-4 border-white shadow-lg object-cover mr-8 transform transition-transform duration-700 ${
          animateImage ? "translate-x-0 translate-y-0" : "-translate-x-[100vw]"
        }`}
      />

      <div className="text-center md:text-left">
        <h1
          className={`text-4xl font-bold uppercase mb-4 transform transition-transform duration-700 ${
            animateUpperText ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0"
          }`}
        >
          Hello friends!
        </h1>
        <h1
          className={`font-sans text-4xl font-bold uppercase transform transition-transform duration-700 ${
            animateLowerText ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          I'm <span className={`${darkMode ? "text-blue-400" : "text-black"}`}>Niranjan Kumar</span>
        </h1>
      </div>
      <Starsky/>
    </div>
   <About/>
   <Projects/>
    <Contact />
</>
  );
}