
import React from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { TypeAnimation } from 'react-type-animation';
import particleConfig from './particleConfig'; // Assuming you have this config file

const Home = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    return (
        <section className="home" id="home">
            <Particles id="tsparticles" init={particlesInit} options={particleConfig} />
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

            {/* ========== MODIFIED IMAGE SECTION ========== */}
            <div className="home-img-wrapper">
                <div className="home-img-blob">
                    <img src="/newimage.jpg" alt="Soumyadip Bhattacharya" />
                </div>
            </div>
            {/* ========================================= */}
            
        </section>
    );
};

export default Home;







