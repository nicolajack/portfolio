import { useEffect, useRef } from 'react';
import Navbar from './components/navbar/navbar'
import Profile from './components/profile/profile'
import Chat from './components/chat/chat'
import Projects from './components/projects/projects'
import Background from './components/bg'
import Experiences from './components/experiences/experiences'
import Classes from './components/classes/classes'
import OldClasses from './components/classes/oldClasses'
import About from './components/about/about'
import Footer from './components/footer'
import './App.css'
import dawn2duskImg from './assets/dawn2dusk.png';
import studyBuddyImg from './assets/studybuddy2.png';
import portfolioImg from './assets/woahhmeta.png';
import rpsImg from './assets/rpspreview.png';
import examTimerImg from './assets/examTimerPreview.png'
import tamagitImg from './assets/tamagitPreview.png'
import { Analytics } from '@vercel/analytics/react';

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

    return (
        <>
            <div id="mouseGradient" ref={mouseGradientRef}></div>
            <Background />
            <Navbar />
            <Profile />
            <Chat/>
            <About />
            <div id="projects">
                <h2>projects</h2>
                <div className="projects-grid">
                    <Projects 
                        name="Dawn2Dusk" 
                        description="A full-stack web app displaying sunrise and sunset times around the world. Built with React, Google Gemini API, and React Leaflet." 
                        github="https://github.com/nicolajack/dawn2dusk" 
                        deployLink="https://dawn2dusk.netlify.app/"
                        image={dawn2duskImg}
                    />
                    <Projects 
                        name="Study Buddy" 
                        description="A web app that helps students manage their assignments and deadlines. Built with Next.js and Tailwind CSS." 
                        github="https://github.com/nicolajack/homeworktracker" 
                        deployLink="https://homeworktracker-eight.vercel.app/"
                        image={studyBuddyImg}
                    />
                    <Projects 
                        name="Personal Portfolio" 
                        description="My personal website featuring a modern design, Google Gemini API integration, and MongoDB backend. Winner of a 50-person CSS competition." 
                        github="https://github.com/nicolajack/nicolajack.github.io" 
                        deployLink="https://www.nicojackson.me/"
                        image={portfolioImg}
                    />
                    <Projects 
                        name="Rock, Paper, Scissors" 
                        description="A Next.js app using MediaPipe hand gesture recognition to play rock paper scissors using your webcam." 
                        github="https://github.com/nicolajack/RPSApp" 
                        deployLink="https://rpsncj.netlify.app/"
                        image={rpsImg}
                    />
                    <Projects 
                        name="Tamagit" 
                        description="A virtual pet chrome extension that integrates with GitHub to level up your pet based on your coding activity." 
                        github="https://github.com/nicolajack/tamagit" 
                        deployLink="https://github.com/nicolajack/tamagit"
                        image={tamagitImg}
                    />
                    <Projects 
                        name="Exam Timer" 
                        description="A simple web app to display time left in an exam while displaying relevant notes/reminders." 
                        github="https://github.com/nicolajack/examTimer" 
                        deployLink="https://exam-timer-beta.vercel.app/"
                        image={examTimerImg}
                    />
                </div>
            </div>

            <div id="exp">
                <h2>leadership</h2>
                <Experiences
                    title="Director of Engineering"
                    info="Hack4Impact, Boston University"
                    dates="December, 2025 - Present"
                    bullets={["Lead BU Hack4Impact’s Impact Program, managing 3-4 teams of student interns working on web development projects", "Oversee all ongoing projects and ensure successful delivery to nonprofit partners", "Mentor and support software engineers in their professional development"]}>
                </Experiences>
                <Experiences
                    title="Vice Director"
                    info="BU Quantum, Boston University"
                    dates="May, 2025 - Present"
                    bullets={["Assist the Director in managing BU Quantum’s operations and events", "Build and maintain BU Quantum's website", "Design and run BU Quantum's social media accounts"]}>
                </Experiences>
                <Experiences
                    title="Marketing Director"
                    info="Hack4Impact, Boston University"
                    dates="May, 2025 - December, 2025"
                    bullets={["Oversaw Hack4Impact’s marketing and outreach efforts", "Managed Hack4Impact’s social media accounts and website", "Collaborated with Hack4Impact’s Executive Board to foster an inclusive environment"]}>
                </Experiences>
                <Experiences
                    title="Lead SWE"
                    info="Impact Team, Hack4Impact, Boston University"
                    dates="May, 2025 - December, 2025"
                    bullets={["Led a team of 3 software engineers to build a full-stack web app for a nonprofit organization", "Oversaw the development of the app and ensured it met the needs of the nonprofit"]}>
                </Experiences>
                <Experiences
                    title="Bits Facilitator"
                    info="Girls Who Code, Boston University"
                    dates="March, 2025 - December, 2025"
                    bullets={["Participated in Boston University’s Girls Who Code Bits and Bytes program", "Taught young girls in grades 3rd to 5th the basics of coding in Python and Scratch", "Engaged with students and modeled positive, inclusive language and behavior"]}>
                </Experiences>
                <Experiences
                    title="Website Developer"
                    info="Pinky Toe Paper, Boston University"
                    dates="March, 2025 - December, 2025"
                    bullets={["Co-Website Developer for Boston University’s intersectional-feminist satire publication, Pinky Toe Paper", "Handle front-end website development tasks", "Collaborate with Pinky Toe’s Executive Board to foster an inclusive publication"]}>
                </Experiences>
            </div>

            <div id="exp">
                <h2>experience</h2>
                <Experiences
                    title="CS 111 Course Assistant"
                    info="Boston University, Boston, MA"
                    dates="August, 2025 - Present"
                    bullets={["Assist students in CS 111 labs and office hours with debugging and understanding course material.", 
                    "Hold weekly office hours to help students with coursework and projects.", 
                    "Grade assignments and provide constructive feedback to help students improve their coding skills."]}>
                </Experiences>
                <Experiences 
                    title="Fitness Attendant" 
                    info="FitRec, Boston, MA" 
                    dates="January, 2024 - September, 2025" 
                    bullets={["Built relationships with clients to ensure their satisfaction with services provided.", 
                    "Enforced rules and regulations and maintained safety and order by monitoring patrons' facility use.", 
                    "Promoted healthy spirit, mind, and body philosophy."]}>
                </Experiences>
                <Experiences 
                    title="Shift Leader" 
                    info="Three Sisters, Providence, RI" 
                    dates="June, 2021 - October, 2023" 
                    bullets={["Trained new employees in job duties, safety procedures, and company policies.", 
                    "Provided excellent customer service and developed strong relationships with customers.", 
                    "Held team members accountable during shift by effectively coaching to improve performance."]}>
                </Experiences>
                <Experiences 
                    title="Student" 
                    info="Boston University, Boston, MA" 
                    dates="January, 2024 - May, 2027" 
                    bullets={["Currently pursuing a BA in Computer Science.", "3.98 GPA", "Member of Girls Who Code, Women in Computer Science, Hack4Impact and Forge Design Labs.", "Prominent coursework: Intro to CS 1, Intro to CS 2, Computer Systems, Combinatorics, Linear Algebra, Geometric Algorithms, Probability in Computing, Analysis of Algorithms."]}>
                </Experiences>
            </div>

            <div id="exp">
                <h2>relevant coursework</h2>
                <h3 id="sem2">spring 2026</h3>
                <Classes
                    title="CS 460: Introduction to Database Systems"
                    info="Examines entity-relationship, relational, and object-oriented data models; commercial query languages: SQL, relational algebra, relational calculus, and QBE; file organization, indexing and hashing, query optimization, transaction processing, concurrency control and recovery,integrity, and security."
                    title2="CS 411: Software Engineering"
                    info2="Topics may include software tools, software testing methodologies, retrofitting, regression testing, structured design and structured programming, software characteristics and quality, complexity, entropy, deadlock, fault tolerance, formal proofs of program correctness, chief program teams, and structured walk-throughs."
                    title3="CS 351: Distributed Systems"
                    info3="Covers fundamental concepts of distributed computing (logical clocks, causal order, snapshots, consensus, atomic commit), communication and synchronization primitives, concurrency control, task and data parallelism, data consistency, replication, and fault tolerance.">
                </Classes>
                <OldClasses
                    sem="fall 2025"
                    title="CS 330: Introduction to Analysis of Algorithms"
                    info="Examines the basic principles of algorithm design and analysis; asymptotic analysis; graph algorithms; greedy algorithms; dynamic programming; network flows; polynomial- time reductions; NP-hard and NP-complete problems."
                    grade="grade: A"
                    title2="CS 237: Probability in Computing"
                    info2="Introduction to basic probabilistic concepts and methods used in computer science. Develops an understanding of the crucial role played by randomness in computing, both as a powerful tool and as a challenge to confront and analyze. Emphasis on rigorous reasoning, analysis, and algorithmic thinking."
                    grade2="grade: A">
                </OldClasses>
                <OldClasses
                    sem="spring 2025"
                    title="CS 210: Computer Systems"
                    info="Fundamental concepts of computer systems and systems programming. Hardware fundamentals including digital logic, memory systems, processor design, buses, I/O subsystems, data representations, computer arithmetic, and instruction- set architecture. Software concepts including assembly language programming, operating systems, assemblers, linkers, and systems programming in C."
                    grade="grade: A"
                    title2="CS 132: Geometric Algorithms"
                    info2="Basic concepts, data structures, and algorithms for geometric objects. Examples of topics: Cartesian geometry, transformations and their representation, queries and sampling, triangulations. Emphasis on rigorous reasoning and analysis, advancing algorithmic maturity and expertise in its application."
                    grade2="grade: A">
                </OldClasses>
                <OldClasses 
                    sem="fall 2024"
                    title="CS 112: Introduction to Computer Science 2"
                    info="Covers advanced programming techniques and data structures. Topics include recursion, algorithm analysis, linked lists, stacks, queues, trees, graphs, tables, searching, and sorting."
                    grade="grade: A-"
                    title2="CS 131: Combinatoric Structures"
                    info2="Fundamentals of logic (the laws of logic, rules of inference, quantifiers, proofs and inductive reasoning), fundamental principles of counting (permutations, combinations), set theory, relations and functions, principles for manipulating basic combinatoric structures."
                    grade2="grade: A">
                </OldClasses>
                <OldClasses
                    sem="spring 2024"
                    title="CS 111: Introduction to Computer Science 1"
                    info="The first course for computer science majors and anyone seeking a rigorous introduction. Develops computational problem-solving skills by programming in the Python language, and exposes students to variety of other topics from computer science and its applications."
                    grade="grade: A">
                </OldClasses>
            </div>

            <div id="githubchartcontainer">
                <h2>github contributions</h2>
                <div id="chartcontainer">
                    <img src="http://ghchart.rshah.org/nicolajack" alt="nicolajack's Github chart" id="githubchart"/>
                </div>
                <Analytics />
            </div>
            <Footer />
        </>
    )
}

export default App