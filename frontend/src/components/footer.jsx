import React from 'react';
import { 
  FaEnvelope, 
  FaFilePdf, 
  FaGithub, 
  FaLinkedinIn, 
  FaArrowUp 
} from 'react-icons/fa6';

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Brand & Copyright */}
                <div className="footer-brand">
                    <p className="footer-credit">
                        <span className="code-symbol">&lt;/&gt;</span> Designed & built by <strong>Nico Jackson</strong>
                    </p>
                    <p className="footer-copy">
                        &copy; {new Date().getFullYear()} &bull; All rights reserved.
                    </p>
                </div>

                {/* Social & Contact Buttons */}
                <div className="footer-links">
                    <a 
                        target="_blank" 
                        rel="noreferrer" 
                        href="https://www.linkedin.com/in/nicola-c-jackson/" 
                        aria-label="LinkedIn profile"
                        className="footer-link-btn"
                        title="LinkedIn"
                    >
                        <FaLinkedinIn />
                    </a>
                    <a 
                        target="_blank" 
                        rel="noreferrer" 
                        href="https://github.com/nicolajack" 
                        aria-label="GitHub profile"
                        className="footer-link-btn"
                        title="GitHub"
                    >
                        <FaGithub />
                    </a>
                    <a 
                        target="_blank" 
                        rel="noreferrer" 
                        href="mailto:nicolacj@bu.edu" 
                        aria-label="Email Nico"
                        className="footer-link-btn"
                        title="Email"
                    >
                        <FaEnvelope />
                    </a>
                    <a 
                        target="_blank" 
                        rel="noreferrer" 
                        href="Nicola_Jackson_resume.pdf" 
                        aria-label="Open resume PDF"
                        className="footer-link-btn"
                        title="Resume PDF"
                    >
                        <FaFilePdf />
                    </a>

                    {/* Back to top button */}
                    <button 
                        onClick={scrollToTop} 
                        className="scroll-top-btn" 
                        aria-label="Scroll back to top"
                        title="Back to Top"
                    >
                        <FaArrowUp />
                    </button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;