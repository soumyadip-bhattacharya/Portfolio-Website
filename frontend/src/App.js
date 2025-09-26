import React, { useState, useEffect } from 'react';
import './index.css';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AiAssistant from './components/AiAssistant';

function App() {
  const [activeTheme, setActiveTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const [activeSection, setActiveSection] = useState('home');
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);
    const [indicatorStyle, setIndicatorStyle] = useState({});
  // State for managing the current theme
  const [theme, setTheme] = useState(localStorage.getItem('portfolio-theme') || 'dark');
 

useEffect(() => {
        // Apply theme
        document.body.className = activeTheme;
        localStorage.setItem('theme', activeTheme);

        // Handle scroll events
        const handleScroll = () => {
            if (window.scrollY > 100) setIsHeaderSticky(true); else setIsHeaderSticky(false);
            
            const sections = document.querySelectorAll('section');
            let currentSection = '';
            sections.forEach(sec => {
                const top = window.scrollY;
                const offset = sec.offsetTop - 150;
                const height = sec.offsetHeight;
                if (top >= offset && top < offset + height) {
                    currentSection = sec.getAttribute('id');
                }
            });
            setActiveSection(currentSection || 'home');
        };

        window.addEventListener('scroll', handleScroll);
        
        // Cleanup function
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeTheme]);



  // Effect to apply the theme class to the body
  useEffect(() => {
    document.body.className = ''; // Clear existing theme classes
    document.body.classList.add(`${theme}-theme`);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  // Scroll handling logic remains the same
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) setIsHeaderSticky(true);
      else setIsHeaderSticky(false);

      const sections = document.querySelectorAll('section');
      let currentSection = 'home';
      sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
          currentSection = id;
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect for the sliding nav indicator
    useEffect(() => {
        const activeLink = document.querySelector(`.navbar a[href="#${activeSection}"]`);
        if (activeLink) {
            setIndicatorStyle({
                left: `${activeLink.offsetLeft}px`,
                width: `${activeLink.offsetWidth}px`,
            });
        }
    }, [activeSection]);
    

  //  useEffect(() => {
  //       const hasBeenWelcomed = sessionStorage.getItem('hasBeenWelcomed');
  //       if (!hasBeenWelcomed) {
  //           const timer = setTimeout(() => {
  //               setShowWelcome(true);
  //               sessionStorage.setItem('hasBeenWelcomed', 'true');
  //           }, 3000); // Wait 3 seconds before greeting

  //           return () => clearTimeout(timer); // Cleanup timer
  //       }
  //   }, []);

    const handleThemeChange = (theme) => {
        setActiveTheme(theme);
    };

  return (
    <div>
      {/* Pass the setTheme function down to the Header */}
      <Header 
        isSticky={isHeaderSticky} 
        activeSection={activeSection} 
        setTheme={setTheme} 
        activeTheme={activeTheme}
      />
       <span className="active-nav" style={indicatorStyle}></span>

      <Home />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Contact />
      <Footer />

       <AiAssistant />
    </div>
  );
}

export default App;
