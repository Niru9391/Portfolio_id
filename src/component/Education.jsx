import React, { useState } from 'react';
import { FcNext, FcPrevious } from 'react-icons/fc';

export default function About() {
  const education = [
    { degree: 'B.Tech in Electronics and Communication Engineering', institution: 'National Institute of Technology, Sikkim', year: '2025' },
    { degree: '12th Grade', institution: 'S.V.P College, Bhabhua', year: '2020' },
    { degree: '10th Grade', institution: 'Children\'s Garden English School, Bhabhua', year: '2018' }
  ];

  const [currentEducationIndex, setCurrentEducationIndex] = useState(0);

  const showNextEducation = () => {
    setCurrentEducationIndex((prevIndex) => (prevIndex + 1) % education.length);
  };

  const showPrevEducation = () => {
    setCurrentEducationIndex((prevIndex) =>
      prevIndex === 0 ? education.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-gray-800 p-5 sm:p-8 md:p-10 lg:p-12">
      <div className="text-center mb-6">
        <h2 className="text-2xl text-white sm:text-3xl font-semibold uppercase">academic journey</h2>
      </div>
      <div className="max-w-md mx-auto p-5 border  border-gray-300 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={showPrevEducation}
            disabled={currentEducationIndex==0}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition duration-200"
          >
         <FcPrevious/>
          </button>

          <div className="text-center">
            <p className="text-lg font-semibold text-white">{education[currentEducationIndex].degree}</p>
            <p className='text-white'>{education[currentEducationIndex].institution}</p>
            <p className='text-white'>({education[currentEducationIndex].year})</p>
          </div>

          <button
            onClick={showNextEducation}
            disabled={currentEducationIndex==2}
            className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition duration-200"
          >
            <FcNext/>
          </button>
        </div>
      </div>
    </div>
  );
}
