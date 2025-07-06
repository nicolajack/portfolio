import Navbar from './components/navbar/navbar'
import Profile from './components/profile/profile'
import Chat from './components/chat/chat'
import Projects from './components/projects/projects'
import Background from './components/bg'
import Experiences from './components/experiences/experiences'
import Classes from './components/classes/classes'
import About from './components/about/about'
import Footer from './components/footer'
import './App.css'

function App() {
    return (
        <>
            <Background />
            <Navbar />
            <div id="spacer">
            </div>
            <Profile />
            <Chat/>
            <About />
            <div id="projects">
                <h2>projects</h2>
                <Projects name="Dawn2Dusk" description="A full-stack web app displaying sunrise and sunset times around the world. This app was built using React and utilizes Javascript, HTML, and CSS. It also utilizes calls to the Google Gemini API, and React Leaflet to display maps." github="https://github.com/nicolajack/dawn2dusk"></Projects>
                <Projects name="Personal Portfolio" description="My personal website. You're seeing it right now! This website was built using React, Javascript, HTML, and CSS. It also utilizes the Google Gemini API for the chat feature. The backend utilizes MongoDB. This site also won a 50-person CSS competition." github="https://github.com/nicolajack/nicolajack.github.io"></Projects>
                <Projects name="Rock, Paper, Scissors" description="A simple Next.js app using MediaPipe hand gesture recognition to allow the user to play rock paper scissors against a computer using their webcam. This project was built using Next.js, Javascript, HTML, and Tailwind CSS." github="https://github.com/nicolajack/RPSApp"></Projects>
            </div>

            <div id="exp">
                <h2>leadership</h2>
                <Experiences
                    title="Marketing Director"
                    info="Hack4Impact, Boston University"
                    dates="May, 2025 - Present"
                    bullets={["Oversee Hack4Impact’s marketing and outreach efforts", "Manage Hack4Impact’s social media accounts and website", "Collaborate with Hack4Impact’s Executive Board to foster an inclusive environment"]}>
                </Experiences>
                <Experiences
                    title="Lead SWE"
                    info="Impact Team, Hack4Impact, Boston University"
                    dates="May, 2025 - Present"
                    bullets={["Currently leading a team of 3 software engineers to build a full-stack web app for a nonprofit organization", "Oversee the development of the app and ensure it meets the needs of the nonprofit"]}>
                </Experiences>
                <Experiences
                    title="Bits Facilitator"
                    info="Girls Who Code, Boston University"
                    dates="March, 2025 - Present"
                    bullets={["Participated in Boston University’s Girls Who Code Bits and Bytes program", "Taught young girls in grades 3rd to 5th the basics of coding in Python and Scratch", "Engaged with students and modeled positive, inclusive language and behavior"]}>
                </Experiences>
                <Experiences
                    title="Website Developer"
                    info="Pinky Toe Paper, Boston University"
                    dates="March, 2025 - Present"
                    bullets={["Co-Website Developer for Boston University’s intersectional-feminist satire publication, Pinky Toe Paper", "Handle front-end website development tasks", "Collaborate with Pinky Toe’s Executive Board to foster an inclusive publication"]}>
                </Experiences>
            </div>

            <div id="exp">
                <h2>experience</h2>
                <Experiences 
                    title="Fitness Attendant" 
                    info="FitRec, Boston, MA" 
                    dates="January, 2024 - Present" 
                    bullets={["Built relationships with clients to ensure their satisfaction with services provided.", 
                    "Enforced rules and regulations and maintained safety and order by monitoring patrons' facility use.", 
                    "Promoted healthy spirit, mind, and body philosophy."]}>
                </Experiences>
                <Experiences 
                    title="Shift Leader" 
                    info="Three Sisters, Providence, RI" 
                    dates="June, 2021 - Ocotober, 2023" 
                    bullets={["Trained new employees in job duties, safety procedures, and company policies.", 
                    "Provided excellent customer service and developed strong relationships with customers.", 
                    "Held team members accountable during shift by effectively coaching to improve performance."]}>
                </Experiences>
                <Experiences 
                    title="Student" 
                    info="Boston University, Boston, MA" 
                    dates="January, 2024 - May, 2027" 
                    bullets={["Currently pursuing a BA in Computer Science.", "3.98 GPA", "Member of Girls Who Code, Women in Computer Science, Hack4Impact and Forge Design Labs.", "Prominent coursework: Intro to Computer Science 1, Intro to Computer Science 2, Computer Systems, Combinatorics, and Linear Algebra."]}>
                </Experiences>
            </div>

            <div id="exp">
                <h2>relevant coursework</h2>
                <p>fall 2025</p>
                <Classes
                    title="CS 330: Introduction to Analysis of Algorithms"
                    info="Examines the basic principles of algorithm design and analysis; asymptotic analysis; graph algorithms; greedy algorithms; dynamic programming; network flows; polynomial- time reductions; NP-hard and NP-complete problems.">
                </Classes>
            </div>

            <div id="githubchartcontainer">
                <h2>github contributions</h2>
                <div id="chartcontainer">
                    <img src="http://ghchart.rshah.org/nicolajack" alt="nicolajack's Github chart" id="githubchart"/>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default App