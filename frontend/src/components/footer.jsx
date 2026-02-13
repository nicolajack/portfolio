import './footer.css'
import GithubIcon from '../assets/github.svg'
import LinkedInIcon from '../assets/linkedin.svg'

function Footer() {
    return (
        <div className="footer">
            <div className="leftIcons">
                <a target="_blank" href="https://www.linkedin.com/in/nicola-jackson-64b22833b/"><img className="footerIcon" width="60" src={LinkedInIcon} /></a>
                <a target="_blank" href="https://github.com/nicolajack"><img className="footerIcon" width="60" src={GithubIcon} /></a>
            </div>
            <h2>*designed and built by nico jackson</h2>
            <div className="rightIcons">
                <a target="_blank" href="mailto:nicolacj@bu.edu">
                    <svg className="footerIcon" xmlns="http://www.w3.org/2000/svg" height="60" viewBox="0 0 24 24" fill="none" stroke="#D8BE87" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
                </a>
                <a target="_blank" href="NicolaJacksonBR.pdf">
                    <svg className="footerIcon" xmlns="http://www.w3.org/2000/svg" height="60" viewBox="0 0 24 24" fill="none" stroke="#D8BE87" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M15 18a3 3 0 1 0-6 0"/><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/><circle cx="12" cy="13" r="2"/></svg>
                </a>
            </div>
        </div>
    )
}

export default Footer