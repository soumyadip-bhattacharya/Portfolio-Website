
import React from 'react';

const Skills = () => {
    return (
        <section className="skills" id="skills">
            <h2 className="heading">My <span>Skills</span></h2>

            <div className="skills-container">
                <div className="skills-box">
                    <h3><i className='bx bx-code-alt'></i> Frontend Development</h3>
                    <div className="skills-list">
                        <div className="skill-item"><i className='bx bxl-html5'></i> HTML5</div>
                        <div className="skill-item"><i className='bx bxl-css3'></i> CSS3</div>
                        <div className="skill-item"><i className='bx bxl-javascript'></i> JavaScript (ES6+)</div>
                        <div className="skill-item"><i className='bx bxl-react'></i> React</div>
                        <div className="skill-item"><i className='bx bxl-redux'></i> Redux Toolkit</div>
                        <div className="skill-item"><i className='bx bxl-tailwind-css' ></i> Tailwind CSS</div>
                        <div className="skill-item"><i className='bx bx-layer'></i> UI/UX Design</div>
                    </div>
                </div>

                <div className="skills-box">
                    <h3><i className='bx bx-server'></i> Backend Development</h3>
                    <div className="skills-list">
                        <div className="skill-item"><i className='bx bxl-nodejs'></i> Node.js</div>
                        <div className="skill-item"><i className='bx bxs-file-js'></i> Express.js</div>
                        <div className="skill-item"><i className='bx bx-git-repo-forked'></i> REST APIs</div>
                        <div className="skill-item"><i className='bx bx-shield-quarter'></i> Authentication (JWT)</div>
                        <div className="skill-item"><i className='bx bxl-python'></i> Python</div>
                    </div>
                </div>

                <div className="skills-box">
                    <h3><i className='bx bxs-data'></i> Databases & DevOps</h3>
                    <div className="skills-list">
                        <div className="skill-item"><i className='bx bxl-mongodb'></i> MongoDB</div>
                        <div className="skill-item"><i className='bx bxs-file'></i> Mongoose</div>
                        <div className="skill-item"><i className='bx bxl-git'></i> Git & GitHub</div>
                        <div className="skill-item"><i className='bx bxl-docker'></i> Docker</div>
                        <div className="skill-item"><i className='bx bxl-kubernetes'></i> Kubernetes</div> {/* Added Here */}
                        <div className="skill-item"><i className='bx bx-rocket'></i> CI/CD</div>
                    </div>
                </div>
                
                <div className="skills-box">
                    <h3><i className='bx bx-code-block'></i> Programming Languages</h3>
                    <div className="skills-list">
                        <div className="skill-item"><i className='bx bxl-c-plus-plus'></i> C</div>
                        <div className="skill-item"><i className='bx bxl-java'></i> Java</div>
                        <div className="skill-item"><i className='bx bxl-python'></i> Python</div>
                        <div className="skill-item"><i className='bx bxl-javascript'></i> JavaScript</div>
                       
                    </div>
                </div>

                <div className="skills-box">
                    <h3><i className='bx bx-conversation'></i> Soft Skills & Languages</h3>
                    <div className="skills-list">
                        <div className="skill-item">Problem Solving</div>
                        <div className="skill-item">Team Collaboration</div>
                        <div className="skill-item">Communication</div>
                        <div className="skill-item">English (Professional)</div>
                            <div className="skill-item">Hindi </div>
                        <div className="skill-item">Bengali (Native)</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;