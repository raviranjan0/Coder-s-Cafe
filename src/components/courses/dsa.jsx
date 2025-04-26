import React from 'react';
import { Code, Cpu, Binary, Network, Rocket, BookOpen } from 'lucide-react';

const DSAPage = ({ darkMode }) => {
  const features = [
    {
      icon: <Cpu size={28} className="text-blue-500" />,
      title: "Efficiency Matters",
      description: "Learn to write code that runs faster and uses less memory"
    },
    {
      icon: <Binary size={28} className="text-purple-500" />,
      title: "Problem Solving",
      description: "Develop systematic approaches to break down complex problems"
    },
    {
      icon: <Network size={28} className="text-green-500" />,
      title: "Real-world Applications",
      description: "Understand how tech giants use DSA in their systems"
    },
    {
      icon: <Rocket size={28} className="text-red-500" />,
      title: "Interview Preparation",
      description: "Master the core concepts needed for technical interviews"
    }
  ];

  const topics = [
    "Arrays & Strings",
    "Linked Lists",
    "Stacks & Queues",
    "Trees & Graphs",
    "Sorting Algorithms",
    "Searching Algorithms",
    "Dynamic Programming",
    "Recursion",
    "Hash Tables",
    "Big O Notation"
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Hero Section */}
      <div className={`py-20 px-4 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className={`p-4 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <Code size={48} className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Data Structures & Algorithms</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Master the building blocks of efficient programming and problem solving
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className={`px-6 py-3 rounded-lg font-medium ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white transition-colors`}>
              Start Learning
            </button>
            <button className={`px-6 py-3 rounded-lg font-medium border-2 ${darkMode ? 'border-gray-500 hover:bg-gray-700' : 'border-gray-300 hover:bg-gray-100'} transition-colors`}>
              View Curriculum
            </button>
          </div>
        </div>
      </div>

      {/* What is DSA Section */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <div className={`p-8 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white shadow-md'}`}>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <BookOpen className={`${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            What is DSA?
          </h2>
          <div className="space-y-4 text-lg">
            <p>
              <strong>Data Structures</strong> are ways to organize and store data in a computer so that it can be accessed and modified efficiently.
            </p>
            <p>
              <strong>Algorithms</strong> are step-by-step procedures to solve problems or perform computations.
            </p>
            <p>
              Together, they form the foundation of computer science and programming, enabling you to write optimized code that scales well with large inputs.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Why Learn DSA?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`p-6 rounded-xl transition-all hover:scale-105 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50 shadow-md hover:shadow-lg'}`}
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Topics Covered Section */}
      <div className={`py-16 px-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Topics You'll Master</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {topics.map((topic, index) => (
              <div 
                key={index}
                className={`p-4 rounded-lg text-center font-medium ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-50'} shadow-sm hover:shadow-md transition-all`}
              >
                {topic}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-6xl mx-auto py-20 px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Master DSA?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of students who've boosted their programming skills with our comprehensive DSA course
        </p>
        <button className={`px-8 py-4 rounded-lg font-bold text-lg ${darkMode ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'} text-white transition-all transform hover:scale-105 shadow-lg`}>
          Enroll Now - Start Your Journey
        </button>
      </div>
    </div>
  );
};

export default DSAPage;