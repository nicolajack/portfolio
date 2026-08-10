import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa6';

function Navbar() {
    const [isDark, setIsDark] = useState(() => {
        if (typeof window === 'undefined') {
            return false;
        }

        return document.body.classList.contains('dark-mode') || window.matchMedia('(prefers-color-scheme: dark)').matches;
    });
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        const syncDarkState = () => {
            setIsDark(document.body.classList.contains('dark-mode'));
        };

        syncDarkState();

        const classObserver = new MutationObserver(syncDarkState);
        classObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] });

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener('change', syncDarkState);

        return () => {
            classObserver.disconnect();
            mediaQuery.removeEventListener('change', syncDarkState);
        };
    }, []);

    const toggleDarkMode = () => {
        const nextIsDark = !isDark;
        document.body.classList.toggle('dark-mode', nextIsDark);
        setIsDark(nextIsDark);
    };

    return (
        <header className="navbar-wrapper">
            {/* Mobile Sidebar */}
            <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
                <button 
                    className="close-btn" 
                    onClick={() => setSidebarOpen(false)}
                    aria-label="Close menu"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
                
                <nav className="sidebar-links">
                    <a href="#about" onClick={() => setSidebarOpen(false)}>about</a>
                    <a href="#projects" onClick={() => setSidebarOpen(false)}>projects</a>
                    <a href="#exp" onClick={() => setSidebarOpen(false)}>experiences</a>
                    <a href="#chat" onClick={() => setSidebarOpen(false)}>chat</a>
                </nav>

                <button 
                    className="dark-mode-toggle sidebar-toggle" 
                    onClick={toggleDarkMode} 
                    aria-label="Toggle dark mode"
                >
                    {isDark ? <FaSun className="nav-icon sun" /> : <FaMoon className="nav-icon moon" />}
                    <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
                </button>
            </aside>

            {/* Backdrop overlay for mobile menu */}
            {sidebarOpen && <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />}

            {/* Main Navbar */}
            <div id="navbar">
                <h1 id="name" onClick={() => window.open('https://www.instagram.com/nicojqckson/', '_blank')}>
                    <em>n</em>ico jackso<em>n</em>*
                </h1>

                {/* Desktop Menu */}
                <nav className="nav-links hideOnMobile">
                    <a href="#about">about</a>
                    <a href="#projects">projects</a>
                    <a href="#exp">experiences</a>
                    <a href="#chat">chat</a>

                    <button 
                        className="dark-mode-toggle" 
                        onClick={toggleDarkMode} 
                        aria-label="Toggle dark mode"
                    >
                        {isDark ? <FaSun className="nav-icon sun" /> : <FaMoon className="nav-icon moon" />}
                    </button>
                </nav>

                {/* Mobile Menu Trigger Button (Hidden on Desktop) */}
                <button 
                    className="menuButton" 
                    onClick={() => setSidebarOpen(true)}
                    aria-label="Open menu"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12h18"/><path d="M3 18h18"/><path d="M3 6h18"/></svg>
                </button>
            </div>
        </header>
    );
}

export default Navbar;