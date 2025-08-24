import './projects.css'

function Projects({ name, description, github, deployLink }) {
    return (
            <div className="project">
                <h4>{name}</h4>
                <p>{description}</p>
                <a target="_blank" href={github}><button className="github"><img className="github-inline" width="20" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" /> GitHub</button></a>
                <a target="_blank" href={deployLink}><button className="deploy">Live Demo</button></a>
            </div>
    )
}

export default Projects