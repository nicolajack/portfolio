import './about.css'
import CSS from '../../assets/css.svg'
import HTML from '../../assets/html.svg'
import JS from '../../assets/js.svg'
import PY from '../../assets/py.svg'
import TS from '../../assets/TS.png'
import SQL from '../../assets/SQL.svg'
import C from '../../assets/C.png'
import PANDAS from '../../assets/pandas.png'
import NUMPY from '../../assets/NumPy.png'
import ReactLogo from '../../assets/atom.png'
import Python from '../../assets/python.png'
import TypeScript from '../../assets/typescript.png'
import Java from '../../assets/java.png'
import JavaScript from '../../assets/java-script.png'
import Html from '../../assets/html.png'
import C2 from '../../assets/letter-c.png'
import Figma from '../../assets/figma.png'
import SQL2 from '../../assets/sql-server.png'
import { useState } from 'react'
import LogoLoop from './logoloop.jsx';

function About(){
    const [display, setDisplay] = useState('block')
    const [buttonText, setButtonText] = useState('-')

    function toggle() {
        if (display == 'none') {
            setDisplay('block')
            setButtonText('-')
        } else {
            setDisplay('none')
            setButtonText('+')
        }
    }

    const techLogos = [
        { 
            node: <img src={ReactLogo} alt="React" style={{ height: '48px', width: 'auto' }} />, 
            title: "React", 
            href: "https://react.dev" 
        },
        {
            node: <img src={Python} alt="Python" style={{ height: '48px', width: 'auto'}} />,
            title: "Python",
            href: "https://www.python.org/",
        },
        {
            node: <img src={TypeScript} alt="TypeScript" style={{ height: '48px', width: 'auto'}} />,
            title: "TypeScript",
            href: "https://www.typescriptlang.org/",
        },
        {
            node: <img src={Java} alt="Java" style={{ height: '48px', width: 'auto'}} />,
            title: "Java",
            href: "https://www.java.com/en/",
        },
        {
            node: <img src={JavaScript} alt="JavaScript" style={{ height: '48px', width: 'auto'}} />,
            title: "JavaScript",
            href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        },
        {
            node: <img src={Html} alt="HTML" style={{ height: '48px', width: 'auto'}} />,
            title: "HTML",
            href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        },
        {
            node: <img src={C2} alt="C" style={{ height: '48px', width: 'auto'}} />,
            title: "C",
            href: "https://www.w3schools.com/c/c_intro.php",
        },
        {
            node: <img src={Figma} alt="Figma" style={{ height: '48px', width: 'auto'}} />,
            title: "Figma",
            href: "https://www.figma.com/",
        },
        {
            node: <img src={SQL2} alt="SQL" style={{ height: '48px', width: 'auto'}} />,
            title: "SQL",
            href: "https://aws.amazon.com/what-is/sql/",
        }
    ];

    return (
        <div id="about">
            <button className="toggler" onClick={toggle}>{buttonText}</button>
            <h2>
                about me
            </h2>
            <div style={{display: display}}>
                <p id="paratext">
                    i'm a student at boston university studying computer science. i'm currently a member of hack4impact, girlswhocode, and women in computer science. 
                    i'm excited to learn more about fullstack development and ui/ux design. i have experience in python, java, html, css, javascript, typescript, react, sql, c and more. 
                    i'm passionate about using technology to make a positive impact on the world. feel free to contact me at <em>nicolacj@bu.edu</em>.
                </p>
                <br/>
                <h3>my skills</h3>
                <div style={{ position: 'relative', overflow: 'visible', padding: '10px 0'}}>
                    <LogoLoop
                        logos={techLogos}
                        speed={100}
                        direction="left"
                        logoHeight={48}
                        gap={40}
                        pauseOnHover
                        scaleOnHover
                        fadeOut
                        ariaLabel="Technology partners"
                    />
                </div>
            </div>
        </div>
    )
}

export default About