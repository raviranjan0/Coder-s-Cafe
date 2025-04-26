import React from 'react';
import { Coffee, Cpu, Database, Smartphone, Server, Zap, Globe, Shield, Binary, Package } from 'lucide-react';

const JavaPage = ({ darkMode }) => {
  // Core Java concepts
  const javaConcepts = [
    { 
      title: "Object-Oriented Programming", 
      icon: <Package className="text-blue-500" />,
      description: "Learn classes, objects, inheritance, polymorphism, abstraction, and encapsulation"
    },
    { 
      title: "Java Syntax", 
      icon: <Binary className="text-orange-500" />,
      description: "Master variables, data types, operators, loops, and control structures"
    },
    { 
      title: "Collections Framework", 
      icon: <Database className="text-green-500" />,
      description: "Work with Lists, Sets, Maps and other data structures"
    },
    { 
      title: "Exception Handling", 
      icon: <Shield className="text-red-500" />,
      description: "Learn try-catch blocks and custom exceptions"
    },
    { 
      title: "Multithreading", 
      icon: <Cpu className="text-purple-500" />,
      description: "Understand concurrent programming in Java"
    },
    { 
      title: "I/O Streams", 
      icon: <Zap className="text-yellow-500" />,
      description: "Work with file operations and data streams"
    }
  ];

  // Java application areas
  const applicationAreas = [
    "Enterprise Applications",
    "Android Development",
    "Web Applications",
    "Scientific Computing",
    "Big Data Technologies",
    "Game Development",
    "Embedded Systems",
    "Financial Services",
    "Cloud Applications",
    "IoT Solutions"
  ];

  // Learning path
  const learningPath = [
    { step: 1, title: "Java Basics", description: "Syntax, data types, operators" },
    { step: 2, title: "OOP Concepts", description: "Classes, objects, inheritance" },
    { step: 3, title: "Core APIs", description: "Collections, I/O, exceptions" },
    { step: 4, title: "Advanced Topics", description: "Multithreading, lambdas" },
    { step: 5, title: "Build Tools", description: "Maven, Gradle" },
    { step: 6, title: "Frameworks", description: "Spring, Hibernate" }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Hero Section */}
      <div className={`py-20 px-4 text-center ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className={`p-4 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <Coffee size={48} className={`${darkMode ? 'text-red-400' : 'text-red-600'}`} />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Java Programming</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Master one of the most popular and versatile programming languages used by millions of developers worldwide
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className={`px-6 py-3 rounded-lg font-medium ${darkMode ? 'bg-red-600 hover:bg-red-700' : 'bg-red-500 hover:bg-red-600'} text-white transition-colors`}>
              Start Learning
            </button>
            <button className={`px-6 py-3 rounded-lg font-medium border-2 ${darkMode ? 'border-gray-500 hover:bg-gray-700' : 'border-gray-300 hover:bg-gray-100'} transition-colors`}>
              Download Cheat Sheet
            </button>
          </div>
        </div>
      </div>

      {/* What is Java Section */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <div className={`p-8 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white shadow-md'}`}>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Coffee className={`${darkMode ? 'text-red-400' : 'text-red-600'}`} />
            What is Java?
          </h2>
          <div className="space-y-4 text-lg">
            <p>
              Java is a <strong>high-level, object-oriented</strong> programming language that's designed to be <strong>platform-independent</strong> through its "write once, run anywhere" (WORA) capability.
            </p>
            <p>
              Originally developed by Sun Microsystems (now owned by Oracle), Java is known for its <strong>robustness, security</strong>, and <strong>extensive libraries</strong> that make it suitable for everything from mobile apps to enterprise systems.
            </p>
            <p>
              Java applications are <strong>compiled to bytecode</strong> that runs on any Java Virtual Machine (JVM) regardless of computer architecture.
            </p>
          </div>
        </div>
      </div>

      {/* Key Features Section */}
      <div className={`py-16 px-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Features of Java</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Platform Independent (WORA)",
              "Object-Oriented",
              "Simple and Familiar Syntax",
              "Robust and Secure",
              "Multithreaded",
              "High Performance (JIT Compiler)",
              "Distributed Computing",
              "Dynamic and Extensible",
              "Rich Standard Library",
              "Automatic Memory Management (Garbage Collection)"
            ].map((feature, index) => (
              <div 
                key={index}
                className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-50'} shadow-sm hover:shadow-md transition-all`}
              >
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  <Zap className={`${darkMode ? 'text-yellow-400' : 'text-yellow-500'}`} size={20} />
                  {feature}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Core Concepts Section */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Core Java Concepts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {javaConcepts.map((concept, index) => (
            <div 
              key={index}
              className={`p-6 rounded-xl flex flex-col items-center text-center transition-all hover:scale-105 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50 shadow-md hover:shadow-lg'}`}
            >
              <div className="mb-4">
                {concept.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{concept.title}</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{concept.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Application Areas Section */}
      <div className={`py-16 px-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Where is Java Used?</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {applicationAreas.map((area, index) => (
              <div 
                key={index}
                className={`p-4 rounded-lg text-center font-medium ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-50'} shadow-sm hover:shadow-md transition-all`}
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Learning Path Section */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Java Learning Path</h2>
        <div className="space-y-8">
          {learningPath.map((step, index) => (
            <div 
              key={index}
              className={`flex flex-col md:flex-row items-start gap-6 p-6 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} shadow-sm hover:shadow-md transition-all`}
            >
              <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${darkMode ? 'bg-red-900 text-red-400' : 'bg-red-100 text-red-600'} font-bold text-xl`}>
                {step.step}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Learn Java Section */}
      <div className={`py-16 px-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Learn Java?</h2>
          <div className={`p-8 rounded-xl ${darkMode ? 'bg-gray-700' : 'bg-white shadow-md'}`}>
            <ul className="space-y-6 list-disc pl-6">
              <li>
                <strong>High Demand:</strong> Consistently ranked among the top programming languages with abundant job opportunities
              </li>
              <li>
                <strong>Versatility:</strong> Used in web, mobile, enterprise, IoT, cloud, and more
              </li>
              <li>
                <strong>Strong Community:</strong> Vast ecosystem with extensive documentation and support
              </li>
              <li>
                <strong>Android Development:</strong> Primary language for native Android apps
              </li>
              <li>
                <strong>Enterprise Standard:</strong> Preferred choice for large-scale business applications
              </li>
              <li>
                <strong>Great for Beginners:</strong> Strict syntax teaches good programming habits
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Project Ideas Section */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Java Project Ideas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Banking Application",
            "Student Management System",
            "E-commerce Platform",
            "Weather App with API",
            "Chat Application",
            "Library Management System",
            "Hotel Booking System",
            "Quiz Game",
            "File Management Tool",
            "Expense Tracker"
          ].map((project, index) => (
            <div 
              key={index}
              className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'} shadow-sm hover:shadow-md transition-all`}
            >
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <Cpu className={`${darkMode ? 'text-blue-400' : 'text-blue-500'}`} size={20} />
                {project}
              </h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Build a {project.toLowerCase()} to practice core Java concepts
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="max-w-6xl mx-auto py-20 px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Master Java?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join our comprehensive Java course and build real-world applications
        </p>
        <button className={`px-8 py-4 rounded-lg font-bold text-lg ${darkMode ? 'bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700' : 'bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600'} text-white transition-all transform hover:scale-105 shadow-lg`}>
          Enroll Now - Start Coding in Java
        </button>
      </div>
    </div>
  );
};

export default JavaPage;