import React from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section 
      className="h-screen py-16 bg-gradient-to-br from-gray-900 to-gray-700 text-white" 
      id="contact"
    >
      <div className="container mx-auto px-6 h-full flex flex-col justify-center">
        <h2 className="text-5xl font-bold text-center mb-12 uppercase">Contact Me</h2>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
         
          <a href="mailto:niranjan.techworks@gmail.com" className="flex items-center gap-4 text-lg hover:text-blue-400 transition">
            <FaEnvelope className="text-3xl" />
            niranjan.techworks@gmail.com
          </a>

          <a href="https://www.linkedin.com/in/niranjan-kumar-11b561356" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-lg hover:text-blue-400 transition">
            <FaLinkedin className="text-3xl" />
            Niranjan Kumar
          </a>
        </div>
      </div>
    </section>
  );
}
