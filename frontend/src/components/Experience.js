
import React from 'react';

const Experience = () => {
    return (
        <section className="experience" id="experience">
            <h2 className="heading">Work <span>Experience</span></h2>

            <div className="experience-container">
                {/* New Internship Added Here */}
                <div className="experience-box">
                    <div className="experience-content">
                        <div className="year"><i className='bx bxs-calendar'></i> Sept 2025 - Present</div>
                        <h3>Fusion Techlab, Kolkata (Remote)</h3>
                        <h4>Frontend Developer Intern (React.js)</h4>
                        <p>
                            Responsible for translating UI/UX designs into efficient, high-quality code using React.js. Collaborating with cross-functional teams to create seamless user experiences, implement third-party APIs, and ensure application scalability.
                        </p>
                    </div>
                </div>

                <div className="experience-box">
                    <div className="experience-content">
                        <div className="year"><i className='bx bxs-calendar'></i> March 2025 - May 2025</div>
                        <h3>AICTE, Virtual</h3>
                        <h4>Data Analytics Using AI-LLMS Intern</h4>
                        <p>
                            Analyzed datasets from the agriculture and science domains, leveraging Large Language Models (LLMs) for assistance and generating insightful reports from the findings.
                        </p>
                    </div>
                </div>

                <div className="experience-box">
                    <div className="experience-content">
                        <div className="year"><i className='bx bxs-calendar'></i> Nov 2024 - Jan 2025</div>
                        <h3>Bharat Intern, Virtual</h3>
                        <h4>Full Stack Development Intern</h4>
                        <p>
                            Gained practical skills in frontend, backend, and WebRTC technologies. Developed key projects including a Content Management Tool (Blog) and a full-featured Video Conferencing Website similar to Zoom.
                        </p>
                    </div>
                </div>

                <div className="experience-box">
                    <div className="experience-content">
                        <div className="year"><i className='bx bxs-calendar'></i> Aug 2024 - Sep 2024</div>
                        <h3>CodSoft, Virtual</h3>
                        <h4>Full Stack Development Intern</h4>
                        <p>
                            Completed several web development tasks, including building a responsive landing page, a personal portfolio website, and a functional calculator, demonstrating core frontend development skills.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;