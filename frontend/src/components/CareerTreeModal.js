
import React from 'react';

// The data for our career tree, from roots to canopy
const treeData = [
    {
        year: '2030+',
        title: 'Technical Leadership',
        description: 'Grow into a Tech Lead or Solutions Architect role, driving innovation and designing cutting-edge solutions.',
        icon: 'bx bxs-crown',
    },
    {
        year: '2028 - 2030',
        title: 'Specialize & Lead',
        description: 'Deepen my expertise in a specialized area like backend architecture or frontend performance, and begin mentoring others.',
        icon: 'bx bx-layer',
    },
    {
        year: '2026 - 2028',
        title: 'Full Stack Professional',
        description: 'Secure a challenging full-stack role to contribute to impactful projects and learn from an experienced team.',
        icon: 'bx bx-code-block',
    },
    {
        year: '2024 - 2026',
        title: 'B.Tech & Specialization',
        description: 'Currently completing my Computer Science degree and specializing in Frontend Development at Fusion Techlab.',
        icon: 'bx bxs-graduation',
    },
    {
        year: '2023',
        title: 'Foundation & Internships',
        description: 'Built a strong base with multiple full-stack internships, gaining hands-on experience in frontend, backend, and data analytics.',
        icon: 'bx bxs-flag-alt',
    }
];

const CareerTreeModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="tree-modal-overlay" onClick={onClose}>
            <div className="tree-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="tree-modal-close-btn" onClick={onClose}>
                    <i className='bx bx-x'></i>
                </button>
                <h2 className="heading">Career <span>Growth</span></h2>
                <div className="tree-container">
                    <div className="tree-trunk"></div>
                    {treeData.map((item, index) => (
                        <div key={index} className="tree-branch">
                            <div className="tree-node"></div>
                            <div className="tree-content">
                                <div className="tree-header">
                                    <i className={item.icon}></i>
                                    <h3>{item.title}</h3>
                                </div>
                                <span className="tree-year">{item.year}</span>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CareerTreeModal;
