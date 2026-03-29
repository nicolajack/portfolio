import './about.css'
import atmosphere from '../../assets/atmosphere.jpeg'
import watchingF1 from '../../assets/watchingf1.jpeg'
import charm from '../../assets/charm.png'

function About(){
    // fun new shelf feature 
    const shelf = [
        {
            category: 'reading',
            title: 'Atmosphere',
            subtitle: 'Taylor Jenkins Reid',
            progress: 10,
            link: 'https://www.goodreads.com/book/show/216442194-atmosphere',
            image: atmosphere,
        },
        {
            category: 'watching',
            title: 'Formula 1',
            subtitle: '2026',
            progress: 20,
            link: 'https://www.formula1.com/',
            image: watchingF1,
        },
        {
            category: 'listening',
            title: 'Charm',
            subtitle: 'Clairo',
            progress: 85,
            link: 'https://open.spotify.com/album/1KNUCVXgIxKUGiuEB8eG0i?si=IbGXjwfaTumflsT-kgaIsA',
            image: charm,
        },
    ]

    const skills = [
        { name: 'React', primary: true },
        { name: 'Python', primary: true },
        { name: 'TypeScript', primary: true },
        { name: 'JavaScript', primary: false },
        { name: 'Java', primary: false },
        { name: 'C', primary: false },
        { name: 'SQL', primary: false },
        { name: 'HTML/CSS', primary: false },
        { name: 'Next.js', primary: false },
        { name: 'Figma', primary: false },
        { name: 'Git', primary: false },
    ]

    const categoryIcons = {
        reading: (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
            </svg>
        ),
        watching: (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="15" rx="2" ry="2"/>
                <polyline points="17 2 12 7 7 2"/>
            </svg>
        ),
        listening: (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18V5l12-2v13"/>
                <circle cx="6" cy="18" r="3"/>
                <circle cx="18" cy="16" r="3"/>
            </svg>
        ),
    }

    return (
        <div id="about" className="scroll-reveal">
            <h2>
                about me
            </h2>
            <div className='aboutBio'>
                <p id="bioText">
                    i'm a student at boston university studying computer science with a 3.98 gpa. i care about building software that actually helps people, which is why i lead 
                    engineering at <em>hack4impact BU</em>, where we build apps for nonprofits.
                </p>
                <p id="bioText">
                    when i'm not coding, i'm exploring new ideas at the intersection 
                    of design and engineering. i also love to read, play video games, and listen to music.
                </p>
                <div className='bioLinks'>
                    <a className="bioLink" href="mailto:nicolacj@bu.edu" target="_blank" rel="noopener noreferrer">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/>
                            <rect x="2" y="4" width="20" height="16" rx="2"/>
                        </svg>
                        nicolacj@bu.edu
                    </a>
                    <a className="bioLink" href="https://github.com/nicolajack" target="_blank" rel="noopener noreferrer">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        GitHub
                    </a>
                    <a className="bioLink" href="https://www.linkedin.com/in/nicola-jackson-64b22833b/" target="_blank" rel="noopener noreferrer">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        LinkedIn
                    </a>
                </div>

                <div className="aboutDivider"></div>

                <h3>my skills</h3>
                <div className="skillsPills">
                    {skills.map((skill) => (
                        <span
                            key={skill.name}
                            className={`skillPill${skill.primary ? ' skill-primary' : ''}`}
                        >
                            {skill.name}
                        </span>
                    ))}
                </div>

                <div className="aboutDivider"></div>

                <h3>what i'm into right now</h3>
                    <div className="shelf-grid">
                    {shelf.map((item) => (
                        <a className="shelf-card" key={item.category} href={item.link} target="_blank" rel="noopener noreferrer">
                            <div className="shelf-category">
                                {categoryIcons[item.category]}
                                <span>{item.category}</span>
                            </div>
                            <div className={`shelf-cover shelf-cover-${item.category}`}>
                                {item.image ? (
                                    <img src={item.image} alt={item.title} className="shelf-cover-image" />
                                ) : (
                                    <span className="shelf-cover-label">{item.category}</span>
                                )}
                            </div>
                            <div className="shelf-item-title">{item.title}</div>
                            <div className="shelf-item-subtitle">{item.subtitle}</div>
                            <div className="shelf-progress">
                                <div
                                    className={`shelf-progress-fill shelf-fill-${item.category}`}
                                    style={{ width: `${item.progress}%` }}
                                ></div>
                            </div>
                        </a>
                    ))}
                </div>
    
                <div className="status-row">
                    <span className="status-chip">
                        <span className="status-dot"></span>
                        open to opportunities
                    </span>
                    <span className="status-chip">boston, ma</span>
                    <span className="status-chip">class of 2027</span>
                </div>
            </div>
        </div>
    )
}

export default About