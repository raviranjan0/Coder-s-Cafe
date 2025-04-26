import React from 'react';
import { Code, LayoutTemplate, Database, GitBranch, Cpu, Shield, Smartphone, Server, Zap, Globe } from 'lucide-react';

const FullStackPage = ({ darkMode }) => {
  // Core technologies data
  const techStack = [
    { name: "HTML/CSS", category: "Frontend", icon: <LayoutTemplate className="text-blue-500" /> },
    { name: "JavaScript", category: "Frontend", icon: <Code className="text-yellow-500" /> },
    { name: "React.js", category: "Frontend", icon: <Globe className="text-blue-400" /> },
    { name: "Node.js", category: "Backend", icon: <Server className="text-green-500" /> },
    { name: "Express.js", category: "Backend", icon: <Zap className="text-gray-500" /> },
    { name: "MongoDB", category: "Database", icon: <Database className="text-green-400" /> },
    { name: "Git/GitHub", category: "DevOps", icon: <GitBranch className="text-orange-500" /> },
    { name: "REST APIs", category: "Backend", icon: <Cpu className="text-purple-500" /> },
    { name: "Authentication", category: "Security", icon: <Shield className="text-red-500" /> },
    { name: "Responsive Design", category: "Frontend", icon: <Smartphone className="text-pink-500" /> }
  ];

  // Learning path
  const learningPath = [
    { step: 1, title: "Frontend Fundamentals", description: "HTML, CSS, JavaScript basics" },
    { step: 2, title: "Frontend Frameworks", description: "React, Vue, or Angular" },
    { step: 3, title: "Backend Development", description: "Node.js, Express, Python, or Ruby" },
    { step: 4, title: "Databases", description: "SQL (PostgreSQL) & NoSQL (MongoDB)" },
    { step: 5, title: "APIs & Authentication", description: "REST, GraphQL, JWT, OAuth" },
    { step: 6, title: "DevOps Basics", description: "Git, CI/CD, Deployment" }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      {/* Hero Section */}
      <div className={`py-20 px-4 text-center ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className={`p-4 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <Globe size={48} className={`${darkMode ? 'text-green-400' : 'text-green-600'}`} />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Full Stack Development</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Master both frontend and backend technologies to build complete web applications from scratch
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className={`px-6 py-3 rounded-lg font-medium ${darkMode ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600'} text-white transition-colors`}>
              Start Learning
            </button>
            <button className={`px-6 py-3 rounded-lg font-medium border-2 ${darkMode ? 'border-gray-500 hover:bg-gray-700' : 'border-gray-300 hover:bg-gray-100'} transition-colors`}>
              Download Syllabus
            </button>
          </div>
        </div>
      </div>

      {/* What is Full Stack Section */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <div className={`p-8 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white shadow-md'}`}>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Globe className={`${darkMode ? 'text-green-400' : 'text-green-600'}`} />
            What is Full Stack Development?
          </h2>
          <div className="space-y-4 text-lg">
            <p>
              Full stack development refers to building <strong>both client-side (frontend)</strong> and <strong>server-side (backend)</strong> portions of web applications. A full stack developer can work with databases, servers, systems engineering, and clients.
            </p>
            <p>
              <strong>Frontend</strong> is what users see and interact with (UI/UX), while <strong>backend</strong> handles the business logic, database interactions, and server configuration.
            </p>
            <p>
              Becoming a full stack developer gives you <strong>end-to-end understanding</strong> of how web applications work, making you more versatile and valuable in the job market.
            </p>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Core Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {techStack.map((tech, index) => (
            <div 
              key={index}
              className={`p-6 rounded-xl flex flex-col items-center text-center transition-all hover:scale-105 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50 shadow-md hover:shadow-lg'}`}
            >
              <div className="mb-3">
                {tech.icon}
              </div>
              <h3 className="text-lg font-semibold mb-1">{tech.name}</h3>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{tech.category}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Learning Path Section */}
      <div className={`py-16 px-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Learning Path</h2>
          <div className="space-y-8">
            {learningPath.map((step, index) => (
              <div 
                key={index}
                className={`flex flex-col md:flex-row items-start gap-6 p-6 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-50'} shadow-sm hover:shadow-md transition-all`}
              >
                <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${darkMode ? 'bg-green-900 text-green-400' : 'bg-green-100 text-green-600'} font-bold text-xl`}>
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
      </div>

      {/* Why Learn Section */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Learn Full Stack Development?</h2>
        <div className={`p-8 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white shadow-md'}`}>
          <ul className="space-y-6 list-disc pl-6">
            <li>
              <strong>High Demand:</strong> Full stack developers are among the most sought-after professionals in tech with competitive salaries.
            </li>
            <li>
              <strong>Versatility:</strong> You can work on all parts of an application, making you more valuable to employers.
            </li>
            <li>
              <strong>Better Understanding:</strong> Knowing both frontend and backend helps you build more efficient, cohesive applications.
            </li>
            <li>
              <strong>Entrepreneurial Advantage:</strong> You can build complete products by yourself without relying on others.
            </li>
            <li>
              <strong>Career Flexibility:</strong> Easier to transition between different roles and specializations.
            </li>
          </ul>
        </div>
      </div>

      {/* Project Ideas Section */}
      <div className={`py-16 px-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Project Ideas to Practice</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "E-commerce Store",
              "Social Media Dashboard",
              "Blog Platform with CMS",
              "Task Management App",
              "Weather Application",
              "Recipe Finder",
              "Expense Tracker",
              "Real-time Chat App",
              "Job Board",
              "Learning Management System"
            ].map((project, index) => (
              <div 
                key={index}
                className={`p-6 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-white hover:bg-gray-50'} shadow-sm hover:shadow-md transition-all`}
              >
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  <Zap className={`${darkMode ? 'text-yellow-400' : 'text-yellow-500'}`} size={20} />
                  {project}
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Build a {project.toLowerCase()} with authentication, database, and responsive UI.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="max-w-6xl mx-auto py-20 px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Become a Full Stack Developer?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join our comprehensive program and build real projects with expert guidance
        </p>
        <button className={`px-8 py-4 rounded-lg font-bold text-lg ${darkMode ? 'bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700' : 'bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600'} text-white transition-all transform hover:scale-105 shadow-lg`}>
          Enroll Now - Start Your Journey
        </button>
      </div>
    </div>
  );
};

export default FullStackPage;