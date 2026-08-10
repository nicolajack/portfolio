import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileLines, FaChevronDown, FaLocationDot } from 'react-icons/fa6';
import Headshot from '../../assets/updateHeadshot.png';

function Profile() {
    return (
        <section id="profile" className="hero-section fadeInUp-animation">
            {/* Creative Accent: Ambient Glow Effect */}
            <div className="profile-glow-bg" />

            <div className="profile-container">
                {/* Profile Image with Interactive Halo */}
                <div className="profile-image-wrapper">
                    <div className="image-halo" />
                    <img 
                        id="profilepic" 
                        src={Headshot} 
                        alt="Nico Jackson headshot" 
                    />
                </div>

                {/* Text Content */}
                <div id="profile-text">

                    <span className="profile-greeting">hello, i am</span>
                    <h2 className="profile-name">
                        <em>n</em>ico jackso<em>n</em>*
                    </h2>
                    
                    <p className="profile-subtitle">
                        <FaLocationDot className="location-pin" /> senior @ boston university
                    </p>
                    
                    {/* Social Icon Links */}
                    <div className="profile-socials">
                        <a 
                            href="https://www.linkedin.com/in/nicola-c-jackson/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="LinkedIn Profile"
                            className="social-icon-link"
                        >
                            <FaLinkedin />
                        </a>
                        <a 
                            href="https://github.com/nicolajack" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label="GitHub Profile"
                            className="social-icon-link"
                        >
                            <FaGithub />
                        </a>
                    </div>

                    {/* Action Call-to-Actions */}
                    <div className="profile-actions">
                        <a 
                            href="mailto:nicolacj@bu.edu" 
                            className="profile-btn primary-btn"
                        >
                            <FaEnvelope className="btn-icon" />
                            <span>contact</span>
                        </a>
                        <a 
                            href="Nicola_Jackson_resume.pdf" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="profile-btn secondary-btn"
                        >
                            <FaFileLines className="btn-icon" />
                            <span>resume</span>
                        </a>
                    </div>
                </div>
            </div>

            <a href="#about" className="scroll-indicator" aria-label="Scroll to About section">
                <span className="scroll-text">explore</span>
                <FaChevronDown className="bounce-chevron" />
            </a>
        </section>
    );
}

export default Profile;