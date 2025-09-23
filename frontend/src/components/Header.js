
import React, { useState } from 'react';

const Header = ({ isSticky, activeSection }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`header ${isSticky ? 'sticky' : ''}`}>
            <a href="#home" className="logo">Soumyadip.. <span className="animate" style={{'--i': 1}}></span></a>

            <div 
                className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'}`} 
                id="menu-icon" 
                onClick={toggleMenu}>
                <span className="animate" style={{'--i': 2}}></span>
            </div>

            <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
                <a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a>
                <a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a>
                {/* Link Added Here */}
                <a href="#experience" className={activeSection === 'experience' ? 'active' : ''}>Experience</a>
                <a href="#education" className={activeSection === 'education' ? 'active' : ''}>Education</a>
                <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
                <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a>

                <span className="active-nav"></span>
                <span className="animate" style={{'--i': 2}}></span>
            </nav>
        </header>
    );
};

export default Header;
