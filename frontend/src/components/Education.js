
import React from 'react';

const Education = () => {
    return (
        <section className="education" id="education">
            <h2 className="heading">My <span>Journey</span></h2>
            <div className="education-row">
                <div className="education-column">
                    <h3 className="title">Education</h3>
                    <div className="education-box">
                        <div className="education-content">
                            <div className="content">
                                <div className="year"><i className='bx bxs-calendar'></i> 2018 - 2019</div>
                                <h3>Matriculation - Benedighi Janakalyan High School</h3>
                                <p>Completed my secondary education with a strong foundation in science and mathematics, sparking my interest in technology.</p>
                            </div>
                        </div>
                        <div className="education-content">
                            <div className="content">
                                <div className="year"><i className='bx bxs-calendar'></i> 2020 - 2021</div>
                                <h3>Intermediate - Benedighi Janakalyan High School</h3>
                                <p>Focused on computer science and physics, deepening my understanding of programming logic and system architecture.</p>
                            </div>
                        </div>
                        <div className="education-content">
                            <div className="content">
                                <div className="year"><i className='bx bxs-calendar'></i> 2022 - 2026 (Expected)</div>
                                <h3>B.TECH - NSHM KNOWLEDGE CAMPUS DURGAPUR</h3>
                                <p>Pursuing a Bachelor of Technology in Computer Science, gaining hands-on experience with data structures, algorithms, and full-stack software development.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="education-column">
                    <h3 className="title">Projects</h3>
                    <div className="education-box">
                        {/* New Project Added Here */}
                        <div className="education-content">
                            <div className="content">
                                <div className="year"><i className='bx bxs-calendar'></i> 05/06/2025 - 07/08/2025</div>
                                <h3>Sigma-GPT: AI Chat Application</h3>
                                <p>Engineered an intelligent chat application by integrating the OpenAI GPT API. Developed a secure Node.js backend to manage API requests and a dynamic React frontend for a seamless conversational experience.</p>
                            </div>
                        </div>
                        <div className="education-content">
                            <div className="content">
                                <div className="year"><i className='bx bxs-calendar'></i>10/02/2025 - 25/04/2025</div>
                                <h3>Video Conferencing App</h3>
                                <p>Developed a real-time video chat application using React. Implemented features for multi-user video calls, showcasing skills in modern frontend frameworks and real-time communication protocols.</p>
                            </div>
                        </div>
                        <div className="education-content">
                            <div className="content">
                                <div className="year"><i className='bx bxs-calendar'></i>10/09/2024 - 12/11/2024</div>
                                <h3>Interactive Portfolio Website</h3>
                                <p>Built this fully responsive personal portfolio from scratch using React for the frontend and Node.js/Express for the backend. The contact form is powered by a custom API connected to a MongoDB database.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;