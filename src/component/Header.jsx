import React, { useState } from "react";
import logo from "../image/Logo.jpg";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';

export default function Header({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className={`sticky top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-300 ${darkMode ? "bg-black text-white" : "bg-gray-200 text-black"}`}> 
      <div className="flex items-center space-x-3">
        <img src={logo} alt="Logo" className="h-10 w-10 rounded-full" />
        <h1 className="text-lg font-semibold uppercase">Niranjan Kumar</h1>
      </div>

      <nav className="hidden md:flex space-x-6">
        {navLinks.map((link, index) => (
          <Link key={index} to={link.to} className="cursor-pointer hover:text-blue-500 uppercase">{link.label}</Link>
        ))}
      </nav>

      <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-300 transition-all duration-300">
        {darkMode ? <MdLightMode className="h-8 w-8 text-yellow-400" /> : <MdDarkMode className="h-8 w-8 text-gray-900" />}
      </button>

      <div className="md:hidden">
        <button onClick={toggleMenu}>{menuOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}</button>
      </div>

      {menuOpen && (
        <div className={`absolute top-16 left-0 w-full z-40 flex flex-col items-center space-y-4 py-6 md:hidden ${darkMode ? "bg-black text-white" : "bg-gray-200 text-black"}`}>          
          {navLinks.map((link, index) => (
            <Link key={index} to={link.to} className="cursor-pointer hover:text-blue-500 uppercase" onClick={toggleMenu}>{link.label}</Link>
          ))}
        </div>
      )}
    </header>
  );
}
