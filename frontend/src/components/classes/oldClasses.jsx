import { useState } from 'react'
import './classes.css'

function OldClasses({sem, title, info, grade, title2, info2, grade2}) {
    const [display, setDisplay] = useState('block')
    const [buttonText, setButtonText] = useState('hide')

    function toggle() {
        if (display == 'none') {
            setDisplay('block')
            setButtonText('hide')
        } else {
            setDisplay('none')
            setButtonText('show')
        }
    }

    return (
        <div>
            <div className="header">
                <h2 id="sem">{sem}</h2>
                <button className="toggler" onClick={toggle}>{buttonText}</button>
            </div>
            <div className="job" style={{display: display}}>
                <h3>{title}</h3>
                <h4>{info}</h4>
                <h4 id="grade">{grade}</h4>
                <br></br>
                <h3>{title2}</h3>
                <h4>{info2}</h4>
                <h4 id="grade">{grade2}</h4>
            </div>
        </div>
    )
}

export default OldClasses