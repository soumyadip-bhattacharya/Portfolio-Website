
import React from 'react';

const About = () => {
    return (
        <section className="about" id="about">
            <h2 className="heading">About <span>Me</span></h2>

            <div className="about-img">
                <img src="/photo 5.jpg" alt="Soumyadip Bhattacharya's Professional Headshot" />
                <span className="circle-spin"></span>
            </div>

            <div className="about-content">
                <h3>Full-Stack Developer | Bridging Ideas and Reality with Code</h3>
                <p>
                    Hello! I'm Soumyadip, a passionate developer dedicated to building elegant and efficient web applications. For me, development isn't just about writing code; it's about solving real-world problems and creating seamless digital experiences that people love to use.
                </p>

                <div className="about-boxes-container">
                    <div className="about-box">
                        <i className='bx bx-code-alt'></i>
                        <h4>Frontend: Crafting Intuitive Experiences</h4>
                        <p>
                            I bring designs to life with pixel-perfect precision and fluid interactivity. My focus is on creating responsive, engaging, and highly accessible user interfaces across all devices.
                        </p>
                    </div>

                    <div className="about-box">
                        <i className='bx bx-server'></i>
                        <h4>Backend: Building Robust Foundations</h4>
                        <p>
                            I architect the powerful server-side logic that drives applications. I specialize in building secure APIs, managing databases, and ensuring optimal performance and scalability from the ground up.
                        </p>
                    </div>
                </div>

                <div className="btn-box btns">
                    <a href="/my-resume.pdf" className="btn" download>Download CV</a>
                </div>
            </div>
        </section>
    );
};

export default About;