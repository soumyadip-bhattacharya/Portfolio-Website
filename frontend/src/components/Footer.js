import React, { useState } from 'react';
import CopyrightModal from './CopyrightModal';
import GalleryModal from './GalleryModal'; // 1. Import the new gallery

const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isGalleryOpen, setIsGalleryOpen] = useState(false); // 2. Add state for the gallery

    return (
        <>
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-text">
                        <p>
                            <span onClick={() => setIsModalOpen(true)} className="copyright-link">
                                Copyright &copy; 2025 by Soumyadip | All Rights Reserved.
                            </span>
                        </p>
                    </div>

                    <div className="footer-right-cluster">
                        <div className="footer-main">
                            <div className="footer-section">
                                <a href="https://www.google.com/maps/place/Durgapur,+West+Bengal,+India" target="_blank" rel="noopener noreferrer" className="footer-block-link">
                                    <h4><i className='bx bx-map'></i> Location</h4>
                                    <p>Durgapur, West Bengal, India</p>
                                </a>
                            </div>

                            {/* 3. Make Gallery section a button */}
                            <div className="footer-section">
                                <button className="footer-gallery-btn" onClick={() => setIsGalleryOpen(true)}>
                                    <h4><i className='bx bx-images'></i> Gallery</h4>
                                    <p>View My Work</p>
                                </button>
                            </div>

                            <div className="footer-section">
                                <h4>Follow Me</h4>
                                <div className="footer-social">
                                    <a href="https://github.com/soumyadip-bhattacharya?tab=repositories"><i className='bx bxl-github'></i></a>
                                    <a href="https://www.linkedin.com/in/soumyadip-bhattacharya-4081b6272/"><i className='bx bxl-linkedin'></i></a>
                                    <a href="https://instagram.com"><i className='bx bxl-instagram'></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="footer-iconTop">
                            <a href="#home"><i className='bx bx-up-arrow-alt'></i></a>
                        </div>
                    </div>
                </div>
            </footer>
            {/* 4. Render both modals */}
            <CopyrightModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <GalleryModal isOpen={isGalleryOpen} onClose={() => setIsGalleryOpen(false)} />
        </>
    );
};

export default Footer;

