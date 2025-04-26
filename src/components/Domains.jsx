import React from 'react';
import { Code, Globe, Coffee, Database, Server } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Domains = ({ darkMode }) => {
  const navigate = useNavigate();

  const domains = [
    {
      title: 'Data Structures & Algorithms',
      icon: <Code size={40} />,
      description: 'Master fundamental algorithms and data structures essential for efficient problem-solving and optimized code.',
      path: '/courses/dsa'
    },
    {
      title: 'Full Stack Development',
      icon: <Globe size={40} />,
      description: 'Build complete web applications from front-end interfaces to back-end servers, databases, and everything in between.',
      path: '/courses/fullstack'
    },
    {
      title: 'Java Programming',
      icon: <Coffee size={40} />,
      description: 'Learn object-oriented programming with Java, focusing on enterprise applications and Android development.',
      path: '/courses/java'
    },
    {
      title: 'Data Science',
      icon: <Database size={40} />,
      description: 'Extract insights from data using statistical analysis, machine learning, and data visualization techniques.',
      path: '/courses/datascience'
    },
    {
      title: 'DevOps',
      icon: <Server size={40} />,
      description: 'Bridge development and operations with CI/CD pipelines, containerization, and cloud infrastructure.',
      path: '/courses/devops'
    },
  ];

  const handleCardClick = (path) => {
    console.log('Navigating to:', path);
    navigate(path);
  };

  return (
    <section 
      id="domains" 
      className={`py-20 px-4 ${
        darkMode ? 'bg-black' : 'bg-white'
      }`}
    >
      <div className="container mx-auto">
        <h2 className={`font-['Bebas_Neue'] text-4xl md:text-5xl text-center mb-12 ${
          darkMode ? 'text-white' : 'text-black'
        }`}>
          OUR COURSES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domains.map((domain, index) => (
            <div 
              key={index}
              onClick={() => handleCardClick(domain.path)}
              className={`group relative p-6 rounded-lg transition-all duration-300 cursor-pointer ${
                darkMode 
                  ? 'bg-gradient-to-br from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white' 
                  : 'bg-gradient-to-br from-gray-100 to-white hover:from-gray-200 hover:to-gray-100 text-black'
              } shadow-md hover:shadow-xl`}
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-center mb-4">
                  <div className={`${
                    darkMode ? 'text-white' : 'text-black'
                  } transition-transform duration-300 group-hover:scale-110`}>
                    {domain.icon}
                  </div>
                </div>
                
                <h3 className={`font-['Bebas_Neue'] text-xl md:text-2xl text-center mb-3`}>
                  {domain.title}
                </h3>
                
                <p className="text-center mb-6 text-sm md:text-base opacity-80 flex-grow">
                  {domain.description}
                </p>
                
                <div className="text-center mt-auto">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCardClick(domain.path);
                    }}
                    className={`px-4 py-2 rounded border-2 transition-all duration-300 ${
                      darkMode 
                        ? 'border-white text-white hover:bg-white hover:text-black' 
                        : 'border-black text-black hover:bg-black hover:text-white'
                    }`}
                  >
                    Learn More
                  </button>
                </div>
              </div>
              
              <div className={`absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-10 ${
                darkMode ? 'bg-white' : 'bg-black'
              }`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Domains;