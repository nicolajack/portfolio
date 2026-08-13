import { useEffect, useRef } from 'react';
import Navbar from './components/navbar/navbar'
import Profile from './components/profile/profile'
import Chat from './components/chat/chat'
import ProjectCard from './components/projects/projects'
import Background from './components/bg'
import ExperienceCard from './components/experiences/experiences'
import Classes from './components/classes/classes'
import OldClasses from './components/classes/oldClasses'
import SemesterCard from './components/classes/semesterCard'
import About from './components/about/about'
import Footer from './components/footer'
import './App.css'
import dawn2duskImg from './assets/dawn2dusk.png';
import studyBuddyImg from './assets/studybuddy2.png';
import h4isiteImg from './assets/h4isite.png';
import rpsImg from './assets/rpspreview.png';
import spotifySQLImg from './assets/spotifySQL.png';
import tamagitImg from './assets/tamagitPreview.png';
import bankBot from './assets/bankBot.png';
import {FaFolderOpen, FaBriefcase, FaPeopleGroup, FaGraduationCap, FaGithub, FaCodeCommit, FaArrowUpRightFromSquare} from 'react-icons/fa6';

function App() {
    const mouseGradientRef = useRef(null);

    // device dark/light mode syncing
    useEffect(() => {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDarkMode) {
            document.body.classList.add('dark-mode');
        }

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => {
            if (e.matches) {
                document.body.classList.add('dark-mode');
            } else {
                document.body.classList.remove('dark-mode');
            }
        };

        mediaQuery.addEventListener('change', handleChange);

        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);

    useEffect(() => {
        const move = mouseGradientRef.current;
        const handlePointerMove = event => {
            const { clientX, clientY } = event;
            move.animate({
                left: `${clientX}px`,
                top: `${clientY}px`
            }, { duration: 1000, fill: "forwards" });
        };
        document.body.addEventListener('pointermove', handlePointerMove);
        return () => {
            document.body.removeEventListener('pointermove', handlePointerMove);
        };
    }, []);

    // Scroll reveal animation using Intersection Observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = document.querySelectorAll('.scroll-reveal');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <div id="mouseGradient" ref={mouseGradientRef}></div>
            <Background />
            <Navbar />
            <Profile />
            <About />
            {/* commenting out while fixing <Chat/> */}
            <div id="projects" className="scroll-reveal">
                <div className="section-header">
                    <span className="section-eyebrow">
                        <FaFolderOpen /> selected works
                    </span>
                    <h2 className="section-title">projects</h2>
                </div>

                <div className="projects-grid">
                    <ProjectCard 
                        name="Study Buddy" 
                        category="Full Stack"
                        description="A web app that helps students manage their assignments and deadlines seamlessly." 
                        tags={['Next.js', 'Tailwind CSS', 'TypeScript']}
                        github="https://github.com/nicolajack/homeworktracker" 
                        deployLink="https://homeworktracker-eight.vercel.app/"
                        image={studyBuddyImg}
                        featured={true}
                    />
                    <ProjectCard 
                        name="Bank of Gotham AI Assistant" 
                        category="AI / LLM"
                        description="An intelligent chatbot assistant that helps customers with banking needs and account queries." 
                        tags={['Python', 'Ollama', 'Streamlit']}
                        github="https://github.com/nicolajack/bankBot" 
                        deployLink={null}
                        image={bankBot}
                    />
                    <ProjectCard 
                        name="Dawn2Dusk" 
                        category="Data Viz"
                        description="A full-stack web app displaying sunrise and sunset times around the world with interactive maps." 
                        tags={['React', 'Gemini API', 'React Leaflet']}
                        github="https://github.com/nicolajack/dawn2dusk" 
                        deployLink="https://dawn2dusk.netlify.app/"
                        image={dawn2duskImg}
                        featured={true}
                    />
                    <ProjectCard 
                        name="Rock, Paper, Scissors" 
                        category="Computer Vision"
                        description="A Next.js app using MediaPipe hand gesture recognition to play rock paper scissors using your webcam." 
                        tags={['Next.js', 'MediaPipe', 'JavaScript']}
                        github="https://github.com/nicolajack/RPSApp" 
                        deployLink="https://rpsncj.netlify.app/"
                        image={rpsImg}
                    />
                    <ProjectCard 
                        name="Tamagit" 
                        category="Chrome Extension"
                        description="A virtual pet chrome extension that integrates with GitHub to level up your pet based on your coding activity." 
                        tags={['JavaScript', 'GitHub API', 'Chrome Extension']}
                        github="https://github.com/nicolajack/tamagit" 
                        deployLink={null}
                        image={tamagitImg}
                    />
                    <ProjectCard 
                        name="SQL Spotify Stats" 
                        category="SQL / Analytics"
                        description="A database application querying personal Spotify streaming history using custom SQL analytics." 
                        tags={['SQL', 'React', 'Node.js']}
                        github="https://github.com/nicolajack/spotifySQLStats" 
                        deployLink={null}
                        image={spotifySQLImg}
                    />
                </div>
            </div>

            {/* EXPERIENCE SECTION */}
            <section id="experience" className="experience-section scroll-reveal">
                <div className="section-header">
                    <span className="section-eyebrow">
                        <FaBriefcase /> career & campus roles
                    </span>
                    <h2 className="section-title">experience</h2>
                </div>

                <div className="timeline-container">
                    <ExperienceCard
                        title="Technology Intern"
                        info="PNC Financial Institution, Pittsburgh, PA"
                        dates="May, 2026 - August 2026"
                        bullets={[
                            "Engineered Aria, an internal AI coding assistant (similar to GitHUb Copilot) custom-trained on proprietary systems to automate developer workflows for enterprise teams",
                            "Authored 15+ instruction and skill files spanning API scaffolding, database connectivity (MongoDB, Kafka, Oracle), and Angular development, forming the core knowledge base driving the agent’s accuracy",
                            "Reduced repetitive developer setup tasks (boilerplate, DB configuration, environment scaffolding) by 30%, designed with a modular framework to support upcoming enterprise-wide expansion"
                        ]}
                    />
                    <ExperienceCard
                        title="CS 111 Course Assistant"
                        info="Boston University, Boston, MA"
                        dates="August, 2025 - Present"
                        bullets={[
                            "Assist students in CS 111 labs and office hours with debugging and understanding course material.",
                            "Hold weekly office hours to help students with coursework and projects.",
                            "Grade assignments and provide constructive feedback to help students improve their coding skills."
                        ]}
                    />
                    <ExperienceCard 
                        title="Computer Science BA Student" 
                        info="Boston University, Boston, MA" 
                        dates="January, 2024 - Present (Expected: May, 2027)" 
                        bullets={[
                            "Currently pursuing a BA in Computer Science with a 3.99 GPA.",
                            "Member of Girls Who Code, Women in Computer Science, Hack4Impact, and Forge Design Labs.",
                            "Prominent coursework: Intro to CS 1 & 2, Computer Systems, Combinatorics, Linear Algebra, Geometric Algorithms, Probability in Computing, Analysis of Algorithms, Distributed Systems, Database Systems."
                        ]}
                    />
                </div>
            </section>

            {/* LEADERSHIP SECTION */}
            <section id="leadership" className="experience-section scroll-reveal">
                <div className="section-header">
                    <span className="section-eyebrow">
                        <FaPeopleGroup /> community & impact
                    </span>
                    <h2 className="section-title">leadership</h2>
                </div>

                <div className="timeline-container">
                    <ExperienceCard
                        title="Director of Engineering"
                        info="Hack4Impact, Boston University"
                        dates="December, 2025 - Present"
                        bullets={[
                            "Lead BU Hack4Impact’s Impact Program, managing 3-4 teams of student interns working on web development projects",
                            "Oversee all ongoing projects and ensure successful delivery to nonprofit partners",
                            "Mentor and support software engineers in their professional development"
                        ]}
                    />
                    <ExperienceCard
                        title="Marketing Director"
                        info="Hack4Impact, Boston University"
                        dates="May, 2025 - December, 2025"
                        bullets={[
                            "Oversaw Hack4Impact’s marketing and outreach efforts",
                            "Managed Hack4Impact’s social media accounts and website",
                            "Collaborated with Hack4Impact’s Executive Board to foster an inclusive environment"
                        ]}
                    />
                    <ExperienceCard
                        title="Lead SWE"
                        info="Impact Team, Hack4Impact, Boston University"
                        dates="May, 2025 - December, 2025"
                        bullets={[
                            "Led a team of 3 software engineers to build a full-stack web app for a nonprofit organization",
                            "Oversaw the development of the app and ensured it met the needs of the nonprofit"
                        ]}
                    />
                    <ExperienceCard
                        title="Bits Facilitator"
                        info="Girls Who Code, Boston University"
                        dates="March, 2025 - December, 2025"
                        bullets={[
                            "Participated in Boston University’s Girls Who Code Bits and Bytes program",
                            "Taught young girls in grades 3rd to 5th the basics of coding in Python and Scratch",
                            "Engaged with students and modeled positive, inclusive language and behavior"
                        ]}
                    />
                </div>
            </section>

            {/* RELEVANT COURSEWORK SECTION */}
            <section id="coursework" className="coursework-section scroll-reveal">
                <div className="section-header">
                    <span className="section-eyebrow">
                        <FaGraduationCap /> academic background
                    </span>
                    <h2 className="section-title">relevant coursework</h2>
                </div>

                <div className="coursework-container">
                    <SemesterCard
                        semester="Fall 2026"
                        status="Current / Upcoming"
                        defaultOpen={true}
                        courses={[
                            {
                                code: "CS 357",
                                title: "Introduction to Information Security",
                                description: "Provides basic concepts needed for understanding information security. Discusses vulnerabilities, design principles, basic algorithms, security definitions, system/network security, web security, cryptography, and data privacy."
                            },
                            {
                                code: "CS 320",
                                title: "Concepts of Programming Languages",
                                description: "Concepts involved in the design of programming languages. Bindings, argument transmission, control structures, compile-time/run-time environments, and interpreters."
                            },
                            {
                                code: "CS 115",
                                title: "Academic Writing in Computer Science",
                                description: "Writing-intensive unit focused on critical reading, constructing arguments, and synthesizing technical source material on modern issues in computer science."
                            }
                        ]}
                    />

                    <SemesterCard
                        semester="Spring 2026"
                        courses={[
                            {
                                code: "CS 460",
                                title: "Introduction to Database Systems",
                                description: "Examines entity-relationship, relational, and object-oriented data models; SQL, relational algebra; indexing, query optimization, transaction processing, and concurrency control.",
                                grade: "Grade: A"
                            },
                            {
                                code: "CS 411",
                                title: "Software Engineering",
                                description: "Software testing methodologies, retrofitting, regression testing, structured design, software complexity, program correctness, and chief program teams.",
                                grade: "Grade: A"
                            },
                            {
                                code: "CS 351",
                                title: "Distributed Systems",
                                description: "Fundamental concepts of distributed computing (logical clocks, consensus, atomic commit), communication primitives, concurrency control, replication, and fault tolerance.",
                                grade: "Grade: A"
                            }
                        ]}
                    />

                    <SemesterCard
                        semester="Fall 2025"
                        courses={[
                            {
                                code: "CS 330",
                                title: "Introduction to Analysis of Algorithms",
                                description: "Basic principles of algorithm design and analysis; asymptotic analysis; graph algorithms; greedy algorithms; dynamic programming; network flows; NP-completeness.",
                                grade: "Grade: A"
                            },
                            {
                                code: "CS 237",
                                title: "Probability in Computing",
                                description: "Probabilistic concepts and methods used in computer science. Emphasizes randomness as both a tool and analytical challenge with rigorous mathematical reasoning.",
                                grade: "Grade: A"
                            }
                        ]}
                    />

                    <SemesterCard
                        semester="Spring 2025"
                        courses={[
                            {
                                code: "CS 210",
                                title: "Computer Systems",
                                description: "Hardware fundamentals (digital logic, memory, processor design) and systems programming in C, assembly language, operating systems, assemblers, and linkers.",
                                grade: "Grade: A"
                            },
                            {
                                code: "CS 132",
                                title: "Geometric Algorithms",
                                description: "Data structures and algorithms for geometric objects. Cartesian geometry, transformations, queries, sampling, and triangulations.",
                                grade: "Grade: A"
                            }
                        ]}
                    />

                    <SemesterCard
                        semester="Fall 2024"
                        courses={[
                            {
                                code: "CS 112",
                                title: "Introduction to Computer Science 2",
                                description: "Advanced programming techniques and data structures including recursion, linked lists, stacks, queues, trees, graphs, tables, searching, and sorting.",
                                grade: "Grade: A-"
                            },
                            {
                                code: "CS 131",
                                title: "Combinatoric Structures",
                                description: "Laws of logic, rules of inference, quantifiers, proofs, fundamental principles of counting (permutations, combinations), set theory, relations, and functions.",
                                grade: "Grade: A"
                            }
                        ]}
                    />

                    <SemesterCard
                        semester="Spring 2024"
                        courses={[
                            {
                                code: "CS 111",
                                title: "Introduction to Computer Science 1",
                                description: "Rigorous introduction to computational problem-solving using Python, covering fundamental programming concepts and practical applications.",
                                grade: "Grade: A"
                            }
                        ]}
                    />
                </div>
            </section>

            {/* GITHUB CONTRIBUTIONS SECTION */}
            <section id="github-contributions" className="github-section scroll-reveal">
                <div className="section-header">
                    <span className="section-eyebrow">
                        <FaCodeCommit /> open source activity
                    </span>
                    <h2 className="section-title">github contributions</h2>
                </div>

                <div className="github-chart-card">
                    {/* Card Header */}
                    <div className="chart-header">
                        <div className="user-badge">
                            <FaGithub className="github-badge-icon" />
                            <span className="username">@nicolajack</span>
                        </div>
                        <a 
                            href="https://github.com/nicolajack" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="profile-link-btn"
                        >
                            <span>View Profile</span>
                            <FaArrowUpRightFromSquare />
                        </a>
                    </div>

                    {/* Responsive Chart Wrapper */}
                    <div className="chart-wrapper">
                        <img 
                            loading="lazy" 
                            src="https://ghchart.rshah.org/nicolajack" 
                            alt="nicolajack's GitHub contribution graph" 
                            className="github-chart-img"
                        />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default App