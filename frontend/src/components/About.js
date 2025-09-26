import React, { useState } from 'react';
import CareerTreeModal from './CareerTreeModal'; // 1. Import the new modal

const About = () => {
    // 2. Add state to manage the tree modal's visibility
    const [isTreeModalOpen, setIsTreeModalOpen] = useState(false);

    return (
        <>
            <section className="about" id="about">
                <h2 className="heading">About <span>Me</span></h2>

                <div className="about-img">
                    <img src="/photo 5.jpg" alt="Soumyadip Bhattacharya's Professional Headshot" />
                    <span className="circle-spin"></span>
                </div>

                <div className="about-content">
                    <h3>Full-Stack Developer | Bridging Ideas and Reality with Code</h3>
                    <p>
                        Hello! I'm Soumyadip, a passionate developer dedicated to building elegant and efficient web applications. For me, development isn't just about writing code; it's about solving real-world problems and creating seamless digital experiences.
                    </p>

                    <div className="about-boxes-container">
                        <div className="about-box">
                            <i className='bx bx-code-alt'></i>
                            <h4>Frontend: Crafting Intuitive Experiences</h4>
                            <p>
                                I bring designs to life with pixel-perfect precision and fluid interactivity, focusing on responsive, engaging, and highly accessible user interfaces.
                            </p>
                        </div>
                        <div className="about-box">
                            <i className='bx bx-server'></i>
                            <h4>Backend: Building Robust Foundations</h4>
                            <p>
                                I architect powerful server-side logic, specializing in secure APIs, database management, and ensuring optimal performance and scalability.
                            </p>
                        </div>
                    </div>

                    <div className="btn-box btns">
                        <a href="/soumyadip-resume.pdf" className="btn" download>Download CV</a>
                        {/* 3. Add the new button to open the modal */}
                        <button className="btn" onClick={() => setIsTreeModalOpen(true)}>Career Growth</button>
                    </div>
                </div>
            </section>
            
            {/* 4. Render the modal component */}
            <CareerTreeModal isOpen={isTreeModalOpen} onClose={() => setIsTreeModalOpen(false)} />
        </>
    );
};

export default About;

