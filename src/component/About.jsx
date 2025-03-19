import React from "react";
import Skills from "./Skills";
import Education from './Education'
const About = () => {
  return (
    <>
    <section className="bg-gray-900 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4 uppercase">About Me</h2>
        <p className="text-white text-lg">
        Hi, I'm Niranjan Kumar, a passionate full-stack developer who loves learning new technologies and solving problems. I'm currently pursuing my B.Tech at NIT Sikkim, and I'm excited to apply my skills in web development and machine learning to real-world challenges.

I enjoy adapting to new tools and technologies quickly, whether it's building websites or creating models that use data to make predictions.

I have experience with React.js, Node.js, MongoDB, and machine learning, and I've worked on projects like an authentication app and an IPL winning prediction model. I enjoy working with others and always push myself to learn more, innovate, and work well in teams.
        </p>
      </div>
   
    </section>
    <Skills/>
   <Education/>
   
    </>
  );
};

export default About;
