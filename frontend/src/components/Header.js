import React, { useState } from 'react';
import ThemeSwitcher from './ThemeSwitcher';

const Header = ({ isSticky, activeSection, setTheme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`header ${isSticky ? 'sticky' : ''}`}>
            {/* This container groups the items on the left */}
            <div className="header-left">
                {/* ThemeSwitcher comes first */}
                <div className="desktop-theme-switcher">
                    <ThemeSwitcher setTheme={setTheme} />
                </div>
                {/* Logo comes second */}
                <a href="#home" className="logo">Soumyadip..</a>
            </div>

            <div
                className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'}`}
                id="menu-icon"
                onClick={toggleMenu}>
            </div>

            <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
                <a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a>
                <a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a>
                <a href="#experience" className={activeSection === 'experience' ? 'active' : ''}>Experience</a>
                <a href="#education" className={activeSection === 'education' ? 'active' : ''}>Education</a>
                <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
                <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
                
                {/* ThemeSwitcher for the mobile dropdown menu */}
                <div className="mobile-theme-switcher">
                    <ThemeSwitcher setTheme={setTheme} />
                </div>
            </nav>
        </header>
    );
};

export default Header;


