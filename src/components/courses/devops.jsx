import React from 'react';

const DSAPage = ({ darkMode }) => {
  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Your course page content here */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Data Structures & Algorithms</h1>
        {/* Rest of your content */}
      </div>
    </div>
  );
};

export default DSAPage;