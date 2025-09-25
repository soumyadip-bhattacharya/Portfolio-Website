
import React from 'react';

const ThemeSwitcher = ({ setTheme }) => {
    return (
        <div className="theme-switcher">
            <button title="Dark Mode" onClick={() => setTheme('dark')} className="theme-btn dark"></button>
            <button title="Light Mode" onClick={() => setTheme('light')} className="theme-btn light"></button>
            <button title="Synthwave Mode" onClick={() => setTheme('synthwave')} className="theme-btn synthwave"></button>
            <button title="Study Mode" onClick={() => setTheme('study')} className="theme-btn study"></button>
        </div>
    );
};

export default ThemeSwitcher;
