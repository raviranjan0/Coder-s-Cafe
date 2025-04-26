import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = ({ darkMode }) => {
  const heroRef = useRef(null);
  const codeSnippetsRef = useRef(null);
  const titleRef = useRef(null);
  const quoteRef = useRef(null);
  const ctaRef = useRef(null);

  // Parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current || !codeSnippetsRef.current || !titleRef.current) return;
      
      const x = e.clientX;
      const y = e.clientY;
      
      const rect = heroRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (x - centerX) / 50;
      const deltaY = (y - centerY) / 50;
      
      // Parallax for background code snippets
      codeSnippetsRef.current.style.transform = `translate(${-deltaX * 0.5}px, ${-deltaY * 0.5}px)`;
      
      // Subtle movement for title
      titleRef.current.style.transform = `translate(${deltaX * 0.1}px, ${deltaY * 0.1}px)`;
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Typewriter effect for quote
  useEffect(() => {
    if (!quoteRef.current) return;
    
    const text = "Building Tomorrow's Tech Leaders Today";
    const quoteElement = quoteRef.current;
    quoteElement.textContent = '';
    
    let i = 0;
    const typeEffect = setInterval(() => {
      if (i < text.length) {
        quoteElement.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(typeEffect);
      }
    }, 70);
    
    return () => {
      clearInterval(typeEffect);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div 
      ref={heroRef}
      id="home"
      className={`relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-16 ${
        darkMode ? 'bg-gradient-to-br from-gray-900 to-black' : 'bg-gradient-to-br from-white to-gray-200'
      }`}
    >
      <div 
        ref={codeSnippetsRef} 
        className="absolute inset-0 w-full h-full z-0 opacity-10"
      >
        <CodeSnippets />
      </div>
      
      <div className="relative z-10 text-center px-4 py-20">
        <h1 
          ref={titleRef}
          className={`font-['Bebas_Neue'] text-6xl md:text-8xl lg:text-9xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-black'
          }`}
        >
          CODER'S CAFE
        </h1>
        
        <div 
          ref={quoteRef}
          className={`font-['JetBrains_Mono'] text-xl md:text-2xl mb-8 min-h-[2.5rem] ${
            darkMode ? 'text-gray-200' : 'text-gray-800'
          }`}
        >
          {/* Text filled by typewriter effect */}
        </div>
        
        <div ref={ctaRef} className="mt-8">
          <button 
            onClick={() => scrollToSection('domains')}
            className={`${
              darkMode 
                ? 'bg-white text-black hover:bg-gray-200' 
                : 'bg-black text-white hover:bg-gray-800'
            } font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-pulse`}
          >
            Explore Domains
          </button>
        </div>
      </div>
      
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={() => scrollToSection('domains')}
      >
        <ChevronDown size={32} className={darkMode ? 'text-white' : 'text-black'} />
      </div>
    </div>
  );
};

const CodeSnippets = () => {
  const snippets = [
    { 
      content: 'function sortArray(arr) {\n  return arr.sort((a, b) => a - b);\n}', 
      top: '10%', 
      left: '15%', 
      delay: 0 
    },
    { 
      content: 'def fibonacci(n):\n  if n <= 1:\n    return n\n  return fibonacci(n-1) + fibonacci(n-2)', 
      top: '35%', 
      left: '75%', 
      delay: 1 
    },
    { 
      content: '<div className="flex justify-center">\n  <h1>Hello, World!</h1>\n</div>', 
      top: '65%', 
      left: '25%', 
      delay: 2 
    },
    { 
      content: 'import React, { useState } from "react";\n\nconst App = () => {\n  const [count, setCount] = useState(0);\n  return <button onClick={() => setCount(count + 1)}>{count}</button>;\n};', 
      top: '80%', 
      left: '60%', 
      delay: 1.5 
    },
    { 
      content: '{"name": "Coder\'s Cafe", "members": 150, "projects": ["WebApp", "ML Model", "Mobile App"]}', 
      top: '20%', 
      left: '50%', 
      delay: 0.5 
    }
  ];

  return (
    <>
      {snippets.map((snippet, index) => (
        <div 
          key={index}
          className="absolute font-['JetBrains_Mono'] text-xs md:text-sm lg:text-base whitespace-pre bg-opacity-30 rounded p-2 animate-float"
          style={{
            top: snippet.top,
            left: snippet.left,
            animationDelay: `${snippet.delay}s`,
            animationDuration: `${8 + Math.random() * 4}s`
          }}
        >
          {snippet.content}
        </div>
      ))}
    </>
  );
};

export default Hero;