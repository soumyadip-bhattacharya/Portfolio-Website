import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Using the slim version for performance
import { TypeAnimation } from 'react-type-animation';
import particleConfig from './particleConfig'; // Your existing particle configuration is still used

// 1. New component to generate the falling icons
const FallingIcons = () => {
    const icons = [
        'bx bxl-python', 'bx bxs-brain', 'bx bxl-react', 'bx bxl-nodejs', 
        'bx bxs-network-chart', 'bx bxl-mongodb', 'bx bxs-bot', 'bx bxl-docker'
    ];
    
    // Create a larger array to have more icons falling
    const allIcons = Array.from({ length: 40 }).map((_, i) => icons[i % icons.length]);

    return (
        <div className="falling-icons-container">
            {allIcons.map((iconClass, index) => (
                <i 
                    key={index}
                    className={`falling-icon ${iconClass}`}
                    style={{
                        left: `${Math.random() * 100}vw`,
                        fontSize: `${Math.random() * 20 + 15}px`,
                        animationDelay: `${Math.random() * 10}s`,
                        animationDuration: `${Math.random() * 5 + 5}s`
                    }}
                ></i>
            ))}
        </div>
    );
};



const Home = () => {
    const [init, setInit] = useState(false);

    // This useEffect hook initializes the particles engine once, preventing the error.
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    return (
        <section className="home" id="home">
              <FallingIcons />
            {/* The Particles component will only render after the engine is initialized */}
            {init && <Particles id="tsparticles" options={particleConfig} />}
            
            <div className="home-content">
                <h1>Hi, I'm <span>Soumyadip Bhattacharya</span></h1>
                <div className="text-animation">
                    <TypeAnimation
                        sequence={[
                            'Full Stack Developer', 2000,
                            'React Specialist', 2000,
                            'Backend Engineer', 2000,
                            'Problem Solver', 2000,
                        ]}
                        wrapper="h3"
                        speed={50}
                        repeat={Infinity}
                    />
                </div>
                <p>I build elegant, efficient, and user-centric web applications, turning complex challenges into clean, scalable solutions from end to end.</p>
                <div className="btn-box">
                    {/* Changed "Hire Me" to "Download CV" for a more common convention */}
                    <a href="/my-resume.pdf" className="btn" download>Hire Me</a>
                    <a href="#contact" className="btn">Let's Talk</a>
                </div>
            </div>

            <div className="home-sci">
                <a href="https://discord.com/channels/@me/1215679343963938906"><i className='bx bxl-discord-alt'></i></a>
                <a href="https://github.com/soumyadip-bhattacharya?tab=repositories"><i className='bx bxl-github'></i></a>
                <a href="https://www.linkedin.com/in/soumyadip-bhattacharya-4081b6272/"><i className='bx bxl-linkedin'></i></a>
                <a href="https://instagram.com"><i className='bx bxl-instagram'></i></a>
            </div>
            
            {/* Using the updated wrapper class for the image */}
            <div className="home-img-wrapper">
                <div className="home-img-blob">
                    {/* Make sure 'newimage.jpg' is in your 'public' folder */}
                    <img src="/newimage.jpg" alt="Soumyadip Bhattacharya" />
                </div>
            </div>
        </section>
    );
};

export default Home;



