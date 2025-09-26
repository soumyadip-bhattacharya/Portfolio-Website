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
                                <div className="year"><i className='bx bxs-calendar'></i>      </div>
                                <h3>Matriculation - Benedighi Janakalyan High School</h3>
                                <p>Completed my secondary education with a strong foundation in science and mathematics. <br /><strong>Percentage: 78%</strong></p>
                            </div>
                        </div>
                        <div className="education-content">
                            <div className="content">
                                <div className="year"><i className='bx bxs-calendar'></i>  SCIENCE(M P C)     </div>
                                <h3>Intermediate - Benedighi Janakalyan High School</h3>
                                <p>Focused on computer science and physics, deepening my understanding of programming logic and system architecture. <br /><strong>Percentage: 76%</strong></p>
                            </div>
                        </div>
                        <div className="education-content">
                            <div className="content">
                                <div className="year"><i className='bx bxs-calendar'></i>B.TECH in Computer Science</div>
                                <h3>NSHM KNOWLEDGE CAMPUS DURGAPUR</h3>
                                <p>Gaining hands-on experience with data structures, algorithms, and full-stack software development. <br /><strong>CGPA: 7.8 | Percentage: 75%</strong></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="education-column">
                    <h3 className="title">Projects</h3>
                    <div className="education-box">
                        <div className="education-content">
                            <div className="content">
                                <div className="year"><i className='bx bxs-calendar'></i> 04/04/25 - 08/05/25</div>
                                <h3>Sigma-GPT: AI Chat Application</h3>
                                <p>Engineered an intelligent chat application by integrating the OpenAI GPT API. Developed a secure Node.js backend to manage API requests and a dynamic React frontend for a seamless conversational experience.</p>
                            </div>
                        </div>
                        <div className="education-content">
                            <div className="content">
                                <div className="year"><i className='bx bxs-calendar'></i> 04/07/25 - 08/09/25</div>
                                <h3>Video Conferencing App</h3>
                                <p>Developed a real-time video chat application using React. Implemented features for multi-user video calls, showcasing skills in modern frontend frameworks and real-time communication protocols.</p>
                            </div>
                        </div>
                        <div className="education-content">
                            <div className="content">
                                <div className="year"><i className='bx bxs-calendar'></i> 04/01/25 - 08/03/25</div>
                              <h3>Stock Trading Platform</h3>
                                <p>Engineered a high-performance stock trading platform, similar to Zerodha, designed to deliver real-time market data using RESTful APIs, WebSocket streaming, and a robust authentication system.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;

