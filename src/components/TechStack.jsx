import React from 'react';
import { Code, Database, Globe, Server, Terminal } from 'lucide-react';

const TechStack = ({ darkMode }) => {
  const technologies = [
    {
      name: 'Frontend',
      icon: <Globe size={32} />,
      skills: ['React', 'TypeScript', 'Tailwind CSS'],
      progress: 90
    },
    {
      name: 'Backend',
      icon: <Server size={32} />,
      skills: ['Node.js', 'Express', 'Python'],
      progress: 85
    },
    {
      name: 'Database',
      icon: <Database size={32} />,
      skills: ['MongoDB', 'PostgreSQL', 'Redis'],
      progress: 80
    },
    {
      name: 'DevOps',
      icon: <Terminal size={32} />,
      skills: ['Docker', 'AWS', 'CI/CD'],
      progress: 75
    },
    {
      name: 'Programming',
      icon: <Code size={32} />,
      skills: ['Java', 'C++', 'Python'],
      progress: 95
    }
  ];

  return (
    <section className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl md:text-5xl text-center mb-16 font-bold ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Tech Stack We Teach
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg transition-all duration-300 transform hover:-translate-y-2 ${
                darkMode 
                  ? 'bg-gray-800 hover:bg-gray-700' 
                  : 'bg-white hover:bg-gray-100'
              } shadow-lg`}
            >
              <div className="flex items-center mb-4">
                <div className={`mr-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  {tech.icon}
                </div>
                <h3 className={`text-2xl font-bold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {tech.name}
                </h3>
              </div>

              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Club Mastery
                  </span>
                  <span className={`text-sm font-bold ${
                    darkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                    {tech.progress}%
                  </span>
                </div>
                <div className={`h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300"
                    style={{ width: `${tech.progress}%` }}
                  ></div>
                </div>
              </div>

              <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {tech.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <span className="mr-2">•</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;