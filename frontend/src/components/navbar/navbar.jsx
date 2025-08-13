import './navbar.css'
import darkMode from '../../assets/brightness.png'

function Navbar() {
    return (
        <div id="navbar">
            <h1 id="name" onClick={() => window.open('https://www.instagram.com/nicojqckson/', '_blank')}><em>n</em>ico jackso<em>n</em>*</h1>
            <a href="#about">about</a>
            <a href="#projects">projects</a>
            <a href="#exp">experiences</a>
            <a href="#chat">chat</a>
            <button id="darkModeToggle"onClick={() => document.body.classList.toggle("dark-mode")}>
                <img id="darkMode" src={darkMode} alt="dark mode" />
            </button>
        </div>
    )
}

export default Navbar