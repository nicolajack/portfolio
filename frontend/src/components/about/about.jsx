import './about.css'
import CSS from '../../assets/css.svg'
import HTML from '../../assets/html.svg'
import JS from '../../assets/js.svg'
import PY from '../../assets/py.svg'
import { useState } from 'react'

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

    return (
        <div id="about">
            <button className="toggler" onClick={toggle}>{buttonText}</button>
            <h2>
                about me
            </h2>
            <div style={{display: display}}>
                <p id="paratext">
                    i'm a student at boston university studying computer science. i'm currently a member of hack4impact, girlswhocode, and women in computer science. 
                    i'm excited to learn more about fullstack development and ui/ux design. i have experience in python, java, html, css, javascript, react, and more. 
                    i'm passionate about using technology to make a positive impact on the world. feel free to contact me at <em>nicolacj@bu.edu</em>.
                </p>
                <br/>
                <h3>my skills</h3>
                <div className="icons">
                    <img width="60" src={CSS} alt="css" />
                    <img width="60" src={HTML} alt="html" />
                    <img width="60"src={JS} alt="js" />
                    <img width="60" src={PY} alt="python" />   
                </div>
            </div>
        </div>
    )
}

export default About