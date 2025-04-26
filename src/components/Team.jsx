import React from 'react';
import { Users } from 'lucide-react';

const Team = ({ darkMode }) => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=800",
      bio: "10+ years of experience in tech leadership"
    },
    {
      name: "Michael Chen",
      role: "Technical Lead",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800",
      bio: "Full-stack developer with expertise in React and Node.js"
    },
    {
      name: "Emily Rodriguez",
      role: "Community Manager",
      image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=800",
      bio: "Passionate about building inclusive tech communities"
    }
  ];

  return (
    <section id="team" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Users className={`w-12 h-12 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
          </div>
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Meet Our Team
          </h2>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            The passionate individuals driving our mission forward
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className={`rounded-xl p-6 transform hover:scale-105 transition-transform duration-300 ${
                darkMode ? 'bg-gray-800 shadow-blue-500/20' : 'bg-white shadow-xl'
              }`}
            >
              <div className="relative mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className={`absolute inset-0 rounded-lg ${
                  darkMode ? 'bg-gradient-to-t from-gray-900/80' : 'bg-gradient-to-t from-black/50'
                }`} />
              </div>
              <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {member.name}
              </h3>
              <p className={`text-lg font-medium mb-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                {member.role}
              </p>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;