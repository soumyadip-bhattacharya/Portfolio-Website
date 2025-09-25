
import React from 'react';

const CopyrightModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose}>
                    <i className='bx bx-x'></i>
                </button>
                <h3>Copyright & Usage Policy</h3>
                <p>
                    All content included on this site, such as text, graphics, logos, images, and the compilation thereof, as well as the software and code used, is the property of Soumyadip Bhattacharya or its suppliers and is protected by international copyright laws.
                </p>
                <h4>Permitted Use</h4>
                <p>
                    This portfolio and its content are provided for personal and non-commercial use. You are welcome to view, download for caching purposes only, and print pages from the website for your own personal use, subject to the restrictions set out below and elsewhere in these terms and conditions.
                </p>
                <h4>Restrictions</h4>
                <p>
                    You must not:
                </p>
                <ul>
                    <li>Republish material from this website without prior written consent.</li>
                    <li>Sell, rent, or sub-license material from the website.</li>
                    <li>Reproduce, duplicate, copy, or otherwise exploit material on this website for a commercial purpose.</li>
                    <li>Use any of the portfolio projects' codebases for commercial purposes without explicit permission.</li>
                </ul>
                <p>
                    All trademarks and brand names mentioned (e.g., React, Node.js, MongoDB) are the property of their respective owners.
                </p>
                <p>
                    For any inquiries or permissions, please contact me via the <a href="#contact">contact form</a>.
                </p>
            </div>
        </div>
    );
};

export default CopyrightModal;
