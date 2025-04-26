import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Events = ({ darkMode }) => {
  const scrollRef = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollLeft += direction === 'left' ? -scrollAmount : scrollAmount;
    }
  };

  const events = [
    {
      date: "Mar 15, 2025",
      title: "Intro to React Workshop",
      type: "Workshop",
      description: "Learn the fundamentals of React and build your first component.",
    },
    {
      date: "Mar 20, 2025",
      title: "DSA Competition",
      type: "Competition",
      description: "Test your problem-solving skills in our monthly coding contest.",
    },
    {
      date: "Mar 25, 2025",
      title: "Tech Talk: AI in 2025",
      type: "Guest Speaker",
      description: "Industry experts discuss the latest trends in AI and ML.",
    },
    {
      date: "Apr 1, 2025",
      title: "Hackathon Kickoff",
      type: "Event",
      description: "24-hour coding challenge to build innovative solutions.",
    },
    {
      date: "Apr 5, 2025",
      title: "Cloud Computing Workshop",
      type: "Workshop",
      description: "Deep dive into AWS and cloud architecture.",
    },
  ];

  return (
    <section 
      id="events" 
      className={`py-20 px-4 relative ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}
    >
      <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto"
      >
        <h2 className={`font-['Bebas_Neue'] text-4xl md:text-5xl text-center mb-16 ${
          darkMode ? 'text-white' : 'text-black'
        }`}>
          UPCOMING EVENTS
        </h2>

        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full ${
              darkMode ? 'bg-white text-black' : 'bg-black text-white'
            } md:flex hidden items-center justify-center`}
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() => scroll('right')}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full ${
              darkMode ? 'bg-white text-black' : 'bg-black text-white'
            } md:flex hidden items-center justify-center`}
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory hide-scrollbar"
          >
            {events.map((event, index) => (
              <div
                key={index}
                className="snap-center flex-none w-[300px]"
              >
                <div className={`p-6 rounded-lg ${
                  darkMode 
                    ? 'bg-gray-800 border-gray-700' 
                    : 'bg-white border-gray-200'
                } border-2 transition-transform duration-300 hover:scale-105`}>
                  <div className="flex items-center mb-4">
                    <Calendar size={20} className="mr-2" />
                    <span className="text-sm opacity-80">{event.date}</span>
                  </div>
                  <h3 className="font-['Bebas_Neue'] text-xl mb-2">{event.title}</h3>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs mb-3 ${
                    darkMode ? 'bg-gray-700' : 'bg-gray-200'
                  }`}>
                    {event.type}
                  </span>
                  <p className="text-sm opacity-80">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className={`inline-block px-8 py-3 rounded-full border-2 transition-all duration-300 ${
              darkMode 
                ? 'border-white text-white hover:bg-white hover:text-black' 
                : 'border-black text-black hover:bg-black hover:text-white'
            }`}
          >
            View All Events
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Events;