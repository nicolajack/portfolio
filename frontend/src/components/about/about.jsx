import React from 'react';
import { 
  FaBookOpen, 
  FaGamepad, 
  FaMusic, 
  FaEnvelope, 
  FaGithub, 
  FaLinkedin, 
  FaStar, 
  FaLocationDot, 
  FaGraduationCap,
  FaBookmark,
  FaSpotify,
  FaPlaystation,
} from 'react-icons/fa6';

import bookCover from '../../assets/nowReading.jpg';
import gameCover from '../../assets/curPlaying.jpg';
import albumCover from '../../assets/curListening.jpg';

function About() {
    const skills = [
        { name: 'React', primary: true },
        { name: 'Python', primary: true },
        { name: 'TypeScript', primary: true },
        { name: 'Next.js', primary: false },
        { name: 'JavaScript', primary: false },
        { name: 'Java', primary: false },
        { name: 'C', primary: false },
        { name: 'SQL', primary: false },
        { name: 'HTML/CSS', primary: false },
        { name: 'Figma', primary: false },
        { name: 'Git', primary: false },
    ];

    return (
        <section id="about" className="about-section scroll-reveal">
            <div className="section-header">
                <span className="section-eyebrow">
                    <FaStar /> get to know me
                </span>
                <h2 className="section-title">about me</h2>
            </div>

            <div className="about-grid">
                {/* Main Bio Card */}
                <div className="about-card bio-card">
                    <div className="bio-content">
                        <p className="bio-text">
                            i'm a computer science student at <strong>boston university</strong> with a <strong>3.99 GPA</strong>. i care deeply about building software that actually helps people, which is why i lead engineering at <a href="https://hack4impact.org" target="_blank" rel="noopener noreferrer" className="highlight-link">hack4impact BU</a>, where we build custom web applications for non-profits.
                        </p>
                        <p className="bio-text">
                            when i'm not coding, i love to read, write, and explore.
                        </p>
                    </div>

                    <div className="bio-links">
                        <a className="bio-link-pill" href="mailto:nicolacj@bu.edu" target="_blank" rel="noopener noreferrer">
                            <FaEnvelope /> <span>nicolacj@bu.edu</span>
                        </a>
                        <a className="bio-link-pill" href="https://github.com/nicolajack" target="_blank" rel="noopener noreferrer">
                            <FaGithub /> <span>GitHub</span>
                        </a>
                        <a className="bio-link-pill" href="https://www.linkedin.com/in/nicola-c-jackson/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin /> <span>LinkedIn</span>
                        </a>
                    </div>
                </div>

                {/* Skills Toolkit Card */}
                <div className="about-card skills-card">
                    <h3 className="card-subtitle">technical toolkit</h3>
                    <div className="skills-container">
                        {skills.map((skill) => (
                            <span
                                key={skill.name}
                                className={`skill-tag ${skill.primary ? 'skill-primary' : ''}`}
                            >
                                {skill.primary && <FaStar className="primary-sparkle" />}
                                {skill.name}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Control Center Widget Deck */}
                <div className="about-card control-center-card">
                    <div className="control-center-header">
                        <div className="header-left">
                            <span className="control-center-dot" />
                            <h3 className="card-subtitle">nico's control center</h3>
                        </div>
                        <span className="control-center-tag">live status</span>
                    </div>

                    <div className="widgets-deck">
                        {/* WIDGET 1: Music / Spotify Widget */}
                        <a 
                            href="https://open.spotify.com/album/1KNUCVXgIxKUGiuEB8eG0i?si=IbGXjwfaTumflsT-kgaIsA" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="widget music-widget"
                        >
                            <div className="widget-header">
                                <span className="widget-type">
                                    <FaSpotify className="spotify-icon" /> listening
                                </span>
                                <div className="animated-equalizer">
                                    <span className="eq-bar" />
                                    <span className="eq-bar" />
                                    <span className="eq-bar" />
                                </div>
                            </div>

                            <div className="widget-body">
                                <img src={albumCover} alt="Norman Fucking Rockwell by Clairo" className="widget-artwork" />
                                <div className="widget-meta">
                                    <div className="widget-title">Norman Fucking Rockwell</div>
                                    <div className="widget-subtitle">Lana Del Rey</div>
                                    <span className="widget-badge">On Repeat</span>
                                </div>
                            </div>
                        </a>

                        {/* WIDGET 2: Video Game Widget */}
                        <a 
                            href="https://store.steampowered.com/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="widget game-widget"
                        >
                            <div className="widget-header">
                                <span className="widget-type">
                                    <FaGamepad /> playing
                                </span>
                                <span className="platform-tag"><FaPlaystation /> PS4</span>
                            </div>

                            <div className="widget-body">
                                <img src={gameCover} alt="Current Video Game" className="widget-artwork" />
                                <div className="widget-meta">
                                    <div className="widget-title">The Walking Dead</div>
                                    <div className="widget-subtitle">Complete Collection</div>
                                    <span className="widget-badge alt">Side Quests</span>
                                </div>
                            </div>
                        </a>

                        {/* WIDGET 3: Reading Widget */}
                        <a 
                            href="https://www.goodreads.com/book/show/220817728-atmosphere" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="widget book-widget"
                        >
                            <div className="widget-header">
                                <span className="widget-type">
                                    <FaBookOpen /> reading
                                </span>
                                <FaBookmark className="bookmark-icon" />
                            </div>

                            <div className="widget-body">
                                <img src={bookCover} alt="Book Cover" className="widget-artwork" />
                                <div className="widget-meta">
                                    <div className="widget-title">1Q84</div>
                                    <div className="widget-subtitle">Haruki Murakami</div>
                                    
                                    <div className="widget-progress">
                                        <div className="progress-bar">
                                            <div className="progress-fill" style={{ width: '10%' }} />
                                        </div>
                                        <span className="progress-label">10%</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            {/* Status Bar */}
            <div className="status-bar">
                <span className="status-chip">
                    <span className="status-dot"></span>
                    Open to Opportunities
                </span>
                <span className="status-chip">
                    <FaLocationDot className="chip-icon" /> Boston, MA
                </span>
                <span className="status-chip">
                    <FaGraduationCap className="chip-icon" /> Class of 2027
                </span>
            </div>
        </section>
    );
}

export default About;