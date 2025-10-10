import './projects2.css'

function Projects2({ photo, name, description, github, deployLink }) {
    return (
            <div className="project2">
                <img src={photo} alt="projectPic" onClick={()=> window.open({deployLink}, "_blank")} id="projImg"></img>
                <h4 id="projName">{name}</h4>
                <p id="projDesc">{description}</p>
                <a target="_blank" href={github}><button className="github"><img className="github-inline" width="20" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" /> GitHub</button></a>
            </div>
    )
}

export default Projects2