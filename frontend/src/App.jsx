import Navbar from './components/navbar/navbar'
import Profile from './components/profile/profile'
import Chat from './components/chat/chat'
import Projects from './components/projects/projects'
import Background from './components/bg'
import Experiences from './components/experiences/experiences'
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
                <Projects name="H4I Projects" description="A collection of all the projects made as a member of Hack4Impact's junior development team, including this website." github="https://github.com/nicolajack/Hack4Impact2025"></Projects>
                <Projects name="Project 2" description="description here" github="https://github.com"></Projects>
                <Projects name="Project 3" description="description here" github="https://github.com"></Projects>
            </div>
            <div id="exp">
                <h2>experiences</h2>
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
                    bullets={["Currently pursuing a BA in Computer Science.", "3.9 GPA", "Member of Girls Who Code, Women in Computer Science, Hack4Impact and Forge Design Labs.", "Prominent coursework: Intro to Computer Science 1, Intro to Computer Science 2, Computer Systems, Combinatorics, and Linear Algebra."]}>
                </Experiences>
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