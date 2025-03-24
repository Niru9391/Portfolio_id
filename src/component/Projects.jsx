import React from 'react';

const projects = [
  {
    title: 'Currency Converter',
    description: 'A currency conversion app using custom hooks to provide real-time exchange rates.',
    link: 'https://github.com/Niru9391/currency_converter',
  },
  {
    title: 'IPL Winning Prediction',
    description: 'Developed a machine learning model to predict IPL match outcomes using historical data, applying algorithms like Logistic Regression and Random Forest for accurate predictions.',
    link: 'https://github.com/Niru9391/ipl-win-predictor',
  },
  {
    title: 'Random Dice',
    description: 'Built a simple dice roller using HTML, CSS, and JavaScript that generates random numbers from 1 to 6, displaying the result instantly on the screen.',
    link: 'https://github.com/Niru9391/Randomdice',
  },
  {
    title: 'Todo Application',
    description: 'Simple todo application using the html,css and javascript, and store the task in localstorage.',
    link: 'https://github.com/Niru9391/Todo',
  },
  {
    title: 'Color-Recognition-App',
    description: 'Developed a Color Recognition app using OpenCv which will display the the Color name and the Combnation of RGB .',
    link: 'https://github.com/Niru9391/Color-Recognition-App',
  },
  {
    title:"Comming SOON.....",
    description:"Working on Several Projects",
    link:"#"
  },
];

export default function Projects() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-700 text-white" id="projects">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16 uppercase">My Projects</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative p-8 bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent opacity-20 group-hover:opacity-40 transition-all duration-500"></div>
              <h3 className="text-3xl font-semibold mb-4 group-hover:text-blue-400 transition-all">{project.title}</h3>
              <p className="text-gray-300 mb-6 group-hover:text-white transition-all">{project.description}</p>
              <a
                href={project.link}
                className="inline-block px-6 py-3 text-white font-medium bg-blue-500 rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-110"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
