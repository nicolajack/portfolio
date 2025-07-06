import './classes.css'

function Classes({title, info}) {
    return (
        <div className="job">
            <h3>{title}</h3>
            <h4>{info}</h4>
        </div>
    )
}

export default Classes