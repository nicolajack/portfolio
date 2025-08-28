import './navbar.css'
import darkMode from '../../assets/dark-mode.png'

function Navbar() {
    return (
        <div>
            <div id="sideBar">
                <a id="close" onClick={() => document.getElementById("sideBar").style.display = "none"} href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#E1CDA1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </a>
                <a href="#about">about</a>
                <a href="#projects">projects</a>
                <a href="#exp">experiences</a>
                <a href="#chat">chat</a>
                <button id="darkModeToggle"onClick={() => document.body.classList.toggle("dark-mode")}>
                    <img id="darkMode" src={darkMode} alt="dark mode" />
                </button>
            </div>
            <div id="navbar">
                <h1 id="name" onClick={() => window.open('https://www.instagram.com/nicojqckson/', '_blank')}><em>n</em>ico jackso<em>n</em>*</h1>
                <a className="hideOnMobile" href="#about">about</a>
                <a className="hideOnMobile" href="#projects">projects</a>
                <a className="hideOnMobile" href="#exp">experiences</a>
                <a className="hideOnMobile" href="#chat">chat</a>
                <button className="hideOnMobile" id="darkModeToggle"onClick={() => document.body.classList.toggle("dark-mode")}>
                    <img id="darkMode" src={darkMode} alt="dark mode" />
                </button>
                <a className="menuButton" onClick={() => document.getElementById("sideBar").style.display = "flex"} href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#E1CDA1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-align-justify-icon lucide-align-justify"><path d="M3 12h18"/><path d="M3 18h18"/><path d="M3 6h18"/></svg>
                </a>
            </div>
        </div>
    )
}

export default Navbar