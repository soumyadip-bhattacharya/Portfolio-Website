import React, { useState, useEffect } from 'react';
import './index.css'; // Your original CSS

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience'; // 1. Import the new component
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Sticky header logic
      if (window.scrollY > 100) {
        setIsHeaderSticky(true);
      } else {
        setIsHeaderSticky(false);
      }

      // Active section link logic
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

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Header isSticky={isHeaderSticky} activeSection={activeSection} />
      <Home />
      <About />
      <Experience /> {/* 2. Add the component to the layout */}
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;


