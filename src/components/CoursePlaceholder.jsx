// src/components/CoursePlaceholder.jsx
import React from 'react';

const CoursePlaceholder = ({ darkMode, title }) => {
  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'}`}>
      <h1 className="text-4xl font-bold mb-6">{title}</h1>
      <p className="text-xl mb-8">This course page is coming soon!</p>
      <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white shadow-md'}`}>
        <p>We're working hard to bring you the best content.</p>
        <p className="mt-2">Check back later!</p>
      </div>
    </div>
  );
};

export default CoursePlaceholder;