import React from 'react';
import { Brain, Users, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WhyJoin = ({ darkMode }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const reasons = [
    {
      icon: <Brain size={48} />,
      title: "Master In-Demand Skills",
      description: "Learn DSA, DevOps, and cutting-edge technologies that top companies are looking for.",
    },
    {
      icon: <Users size={48} />,
      title: "Learn from Peers",
      description: "Experience our unique student-to-student mentoring system and grow together.",
    },
    {
      icon: <Rocket size={48} />,
      title: "Build Real Projects",
      description: "Participate in hackathons and build projects that solve real-world problems.",
    },
  ];

  return (
    <section 
      id="why-join"
      className={`py-20 px-4 ${darkMode ? 'bg-black' : 'bg-white'}`}
    >
      <motion.div 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto"
      >
        <h2 className={`font-['Bebas_Neue'] text-4xl md:text-5xl text-center mb-16 ${
          darkMode ? 'text-white' : 'text-black'
        }`}>
          WHY JOIN CODER'S CAFE?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={containerVariants}
              className={`p-8 rounded-lg border-2 ${
                darkMode 
                  ? 'border-white/20 bg-gray-900/50' 
                  : 'border-black/20 bg-gray-100/50'
              } hover:transform hover:scale-105 transition-all duration-300`}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`mb-6 ${
                  darkMode ? 'text-white' : 'text-black'
                }`}>
                  {reason.icon}
                </div>
                <h3 className="font-['Bebas_Neue'] text-2xl mb-4">{reason.title}</h3>
                <p className="text-sm md:text-base opacity-80">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WhyJoin;