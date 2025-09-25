import React, { useState } from 'react';

// A new, reusable component for the sports skill bars
const SkillBar = ({ skill, percentage }) => (
    <div className="sport-skill">
        <div className="skill-info">
            <span>{skill}</span>
            <span>{percentage}</span>
        </div>
        <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: percentage }}></div>
        </div>
    </div>
);


const GalleryModal = ({ isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState('achievements');
    const [activePhotoTab, setActivePhotoTab] = useState('project');

    if (!isOpen) return null;

    // --- PHOTO DATA ---
    const projectPhotos = [
        'https://placehold.co/600x400/00b3ff/FFFFFF?text=Project+Showcase+1',
        'https://placehold.co/600x400/00b3ff/FFFFFF?text=Project+Showcase+2',
    ];
    const teamEventPhotos = [
        'https://placehold.co/600x400/FF4500/FFFFFF?text=Team+Event+1',
    ];
    const hobbyPhotos = [
        'https://i.postimg.cc/MHKM2Lw8/Whats-App-Image-2025-09-24-at-14-10-10-c3666fde.jpg',
        'https://i.postimg.cc/d3LH6w17/IMG-20250924-WA0014.jpg',
        'https://i.postimg.cc/FsD9BxD0/IMG-20250924-WA0001.jpg',
        'https://i.postimg.cc/zXtyg5Zm/96d67b7976c5458abb1d8a3fbfebd609.jpg',
        'https://i.postimg.cc/3J7qv5jZ/IMG-20250924-WA0009.jpg',
        'https://i.postimg.cc/SKpYydbj/IMG-20250924-WA0012.jpg',
        'https://i.postimg.cc/tRLxSpvh/IMG-20250924-WA0013.jpg',
        'https://i.postimg.cc/NF7Bk6PC/IMG-20250924-WA0006.jpg',
        'https://i.postimg.cc/3x65pfxJ/IMG-20250924-WA0003.jpg',
        'https://i.postimg.cc/43Zv8sd8/IMG-20250924-WA0016.jpg',
        'https://i.postimg.cc/LXgz5X08/IMG-20250924-WA0005.jpg',
        'https://i.postimg.cc/zfbLSQwd/IMG-20250924-WA0017.jpg'
    ];
    const photoCategories = {
        project: projectPhotos,
        team: teamEventPhotos,
        hobby: hobbyPhotos,
    };

    return (
        <div className="gallery-modal-overlay" onClick={onClose}>
            <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="gallery-modal-close-btn" onClick={onClose}>
                    <i className='bx bx-x'></i>
                </button>
                
                {/* Main Tabs */}
                <div className="gallery-tabs">
                    <button className={`gallery-tab ${activeTab === 'achievements' ? 'active' : ''}`} onClick={() => setActiveTab('achievements')}>
                        <i className='bx bx-trophy'></i> Achievements
                    </button>
                    <button className={`gallery-tab ${activeTab === 'photos' ? 'active' : ''}`} onClick={() => setActiveTab('photos')}>
                        <i className='bx bx-images'></i> Photos
                    </button>
                    <button className={`gallery-tab ${activeTab === 'sports' ? 'active' : ''}`} onClick={() => setActiveTab('sports')}>
                        <i className='bx bx-basketball'></i> Sports
                    </button>
                    <button className={`gallery-tab ${activeTab === 'interests' ? 'active' : ''}`} onClick={() => setActiveTab('interests')}>
                        <i className='bx bx-palette'></i> Interests
                    </button>
                </div>

                <div className="gallery-content">
                    {/* Achievements Content */}
                    {activeTab === 'achievements' && (
                        <div className="achievement-list">
                            <h4>Trainings & Certifications</h4>
                            <ul>
                                <li>Ethical Hacking (Internshala Training)</li>
                                <li>Full-stack Web Development (Apna College)</li>
                                <li>Data Structure & Algorithm Using Java (PW Skills)</li>
                            </ul>
                            <h4>Extra-Curricular Activities</h4>
                            <ul>
                                <li>Led my team in the Smart India Hackathon.</li>
                                <li>Participated and competed in various Tech Quizzes.</li>
                            </ul>
                        </div>
                    )}

                    {/* Photos Content */}
                    {activeTab === 'photos' && (
                        <div>
                            <div className="photo-sub-tabs">
                                <button className={activePhotoTab === 'project' ? 'active' : ''} onClick={() => setActivePhotoTab('project')}>Project Showcase</button>
                                <button className={activePhotoTab === 'workspace' ? 'active' : ''} onClick={() => setActivePhotoTab('workspace')}>Workspace</button>
                                <button className={activePhotoTab === 'team' ? 'active' : ''} onClick={() => setActivePhotoTab('team')}>Team Event</button>
                                <button className={activePhotoTab === 'hobby' ? 'active' : ''} onClick={() => setActivePhotoTab('hobby')}>Hobby Photos</button>
                            </div>
                            {activePhotoTab === 'workspace' ? (
                                <div className="timetable-container">
                                    <h4>Weekly Study & Work Schedule</h4>
                                    <table className="timetable">
                                        <thead>
                                            <tr>
                                                <th>Time</th>
                                                <th>Monday</th>
                                                <th>Tuesday</th>
                                                <th>Wednesday</th>
                                                <th>Thursday</th>
                                                <th>Friday</th>
                                                <th>Saturday</th>
                                                <th>Sunday</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Morning (9am-1pm)</td>
                                                <td className="college">College Classes</td>
                                                <td className="college">College Classes</td>
                                                <td className="college">College Classes</td>
                                                <td className="college">College Classes</td>
                                                <td className="college">College Classes</td>
                                                <td className="skill-dev">Project Work</td>
                                                <td className="personal">Break</td>
                                            </tr>
                                            <tr>
                                                <td>Afternoon (2pm-6pm)</td>
                                                <td className="internship">Internship</td>
                                                <td className="internship">Internship</td>
                                                <td className="internship">Internship</td>
                                                <td className="internship">Internship</td>
                                                <td className="internship">Internship</td>
                                                <td className="skill-dev">Full-stack Dev</td>
                                                <td className="hobby">Hobby: Painting</td>
                                            </tr>
                                            <tr>
                                                <td>Evening (7pm-9pm)</td>
                                                <td className="skill-dev">DSA Practice</td>
                                                <td className="skill-dev">Ethical Hacking</td>
                                                <td className="skill-dev">DSA Practice</td>
                                                <td className="skill-dev">Ethical Hacking</td>
                                                <td className="skill-dev">Full-stack Dev</td>
                                                <td className="personal">Review & Plan</td>
                                                <td className="personal">Relax</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            ) : (
                                <div className="photo-grid">
                                    {photoCategories[activePhotoTab]?.map((photo, index) => (
                                        <div className="photo-item" key={index}>
                                            <img 
                                                src={photo} 
                                                alt={`${activePhotoTab} item ${index + 1}`} 
                                                onContextMenu={(e) => e.preventDefault()}
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}

                    {/* Sports Content */}
                    {activeTab === 'sports' && (
                        <div className="sports-content">
                            <div className="sports-category">
                                <h4><i className='bx bx-desktop'></i> Indoor Sports</h4>
                                <SkillBar skill="Carrom" percentage="60%" />
                                <SkillBar skill="Badminton" percentage="50%" />
                                <SkillBar skill="Card Games" percentage="30%" />
                                <SkillBar skill="BGMI" percentage="25%" />
                            </div>
                            <div className="sports-category">
                                <h4><i className='bx bx-football'></i> Outdoor Sports</h4>
                                <SkillBar skill="Cricket" percentage="90%" />
                                <SkillBar skill="Volleyball" percentage="80%" />
                                <SkillBar skill="Football" percentage="20%" />
                            </div>
                        </div>
                    )}

                    {/* Interests Content */}
                    {activeTab === 'interests' && (
                        <div className="interest-content">
                            <h4>Painting</h4>
                            <p>
                                Beyond coding, I have a passion for painting. It's a creative outlet that allows me to explore colors, shapes, and textures. This hobby enhances my attention to detail and sense of design, skills that I find surprisingly complementary to my work in web development.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default GalleryModal;

