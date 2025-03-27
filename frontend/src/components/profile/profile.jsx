import './profile.css'
import ProfileIcon from '../../assets/nicopfp.png'
import GithubIcon from '../../assets/github.svg'
import LinkedInIcon from '../../assets/linkedin.svg'

function Profile() {
    return (
        <div id="profile" class="fadeInUp-animation">
            <div><img id="profilepic" width ="350" src={ProfileIcon} /></div>
            <div id="profile-text">
                <p>hello, i am</p>
                <h2>nico jackson</h2>
                <p>student @ boston university</p>
                <div className="icons">
                    <a target="_blank" href="https://www.linkedin.com/in/nicola-jackson-64b22833b/"><img id="linkedin-img" width="60" src={LinkedInIcon} /></a>
                    <a target="_blank" href="https://github.com/nicolajack"><img id="github-img" width="60" src={GithubIcon} /></a>
                </div>
                <div className="links">
                    <a target="_blank" href="mailto:nicolajack@gmail.com">
                        <button id="contact">contact</button>
                    </a>
                    <a target="_blank" href="Nicola_Jackson.pdf">
                        <button id="resume">resume</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Profile