import React from 'react';
import { Code2 } from 'lucide-react';

const WeeklyChallenge = ({ darkMode }) => {
  return (
    <section className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Code2 className={`w-12 h-12 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
          </div>
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Weekly Coding Challenge
          </h2>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Test your skills and learn from others
          </p>
        </div>

        <div className={`max-w-4xl mx-auto rounded-lg p-8 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <h3 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            This Week's Challenge
          </h3>
          <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Build a responsive navigation menu with dropdown functionality using only HTML and CSS.
          </p>

          <div className="space-y-4">
            <div className={`p-4 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <h4 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Requirements:</h4>
              <ul className={`list-disc list-inside ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>Mobile-first approach</li>
                <li>Smooth transitions</li>
                <li>Accessible markup</li>
                <li>Cross-browser compatibility</li>
              </ul>
            </div>

            <div className={`p-4 rounded ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <h4 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Prizes:</h4>
              <ul className={`list-disc list-inside ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <li>1st Place: Premium Course Access</li>
                <li>2nd Place: 1-hour Mentoring Session</li>
                <li>3rd Place: Community Recognition Badge</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              className={`px-6 py-3 rounded-full font-semibold transition-colors
                ${darkMode 
                  ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
            >
              Submit Your Solution
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeeklyChallenge;