import { useState } from 'react'
import './classes.css'

function OldClasses({title, info, title2, info2}) {
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
            <button className="toggler" onClick={toggle}>{buttonText}</button>
            <div className="job" style={{display: display}}>
                <h3>{title}</h3>
                <h4>{info}</h4>
                <h3>{title2}</h3>
                <h4>{info2}</h4>
            </div>
        </div>
    )
}

export default OldClasses