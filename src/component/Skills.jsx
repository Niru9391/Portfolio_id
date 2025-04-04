import React from 'react';
import reactLogo from '../image/reactlogo.webp';
import nodejsLogo from '../image/nodejs.webp';
import jsLogo from '../image/Js.webp';
import htmlLogo from '../image/html.webp';
import cssLogo from '../image/css.webp';
import tailwindLogo from '../image/tailwind.webp';
import bootstrapLogo from '../image/bootstrap.webp';
import mongodbLogo from '../image/Mongodb.webp';
import expressLogo from '../image/express.webp';
import pythonLogo from '../image/python.webp';

export default function Skills() {
  const techs = [
    { name: 'React', imgSrc: reactLogo },
    { name: 'Node.js', imgSrc: nodejsLogo },
    { name: 'MongoDB', imgSrc: mongodbLogo },
    { name: 'Express.js', imgSrc: expressLogo },
    { name: 'JavaScript', imgSrc: jsLogo },
    { name: 'HTML5', imgSrc: htmlLogo },
    { name: 'CSS3', imgSrc: cssLogo },
    { name: 'Bootstrap', imgSrc: bootstrapLogo },
    { name: 'Tailwind CSS', imgSrc: tailwindLogo },
    { name: 'Python', imgSrc: pythonLogo },
  ];

  return (
    <div className="bg-white p-5 sm:p-8 md:p-10 lg:p-12">
      <div className="flex flex-col items-center mb-8">
        <h3 className="text-2xl sm:text-3xl font-semibold uppercase text-gray-800">Skills</h3>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-5">
        {techs.map((tech, index) => (
          <div key={index} className="  flex justify-center items-center">
            <img
  src={tech.imgSrc}
  alt={tech.name}
  className=" transition-transform duration-300 ease-in-out transform hover:scale-110 
  h-5 w-5 sm:h-16 sm:w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 xl:h-28 xl:w-28"
  loading='lazy'
/>

          </div>
        ))}
      </div>
    </div>
  );
}
