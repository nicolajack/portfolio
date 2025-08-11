import './navbar.css'

function Navbar() {
    return (
        <div id="navbar">
            <h1 id="name" onClick={() => window.open('https://www.instagram.com/nicojqckson/', '_blank')}><em>n</em>ico jackso<em>n</em>*</h1>
            <a href="#about">about</a>
            <a href="#projects">projects</a>
            <a href="#exp">experiences</a>
            <a href="#chat">chat</a>
        </div>
    )
}

export default Navbar