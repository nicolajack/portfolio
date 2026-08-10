import React from 'react';
import { 
  FaGithub, 
  FaArrowUpRightFromSquare, 
  FaStar, 
  FaCode 
} from 'react-icons/fa6';

function ProjectCard({ 
    name, 
    description, 
    category, 
    tags = [], 
    github, 
    deployLink, 
    image, 
    featured 
}) {
    return (
        <article className="project-card">
            {/* macOS Browser Mockup Header */}
            <div className="browser-header">
                <div className="mac-dots">
                    <span className="dot dot-close" />
                    <span className="dot dot-minimize" />
                    <span className="dot dot-expand" />
                </div>
                {category && <span className="browser-category">{category}</span>}
                {featured && (
                    <span className="featured-badge">
                        <FaStar /> Highlight
                    </span>
                )}
            </div>

            {/* Preview Image Frame */}
            <div className="project-image-frame">
                <a 
                    href={deployLink || github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="image-link"
                >
                    <img src={image} alt={`${name} preview`} className="project-image" />
                    <div className="image-overlay">
                        <span>View Project <FaArrowUpRightFromSquare /></span>
                    </div>
                </a>
            </div>

            {/* Content Body */}
            <div className="project-content">
                <h3 className="project-title">{name}</h3>
                <p className="project-description">{description}</p>

                {/* Tech Stack Pills */}
                {tags.length > 0 && (
                    <div className="project-tags">
                        {tags.map((tag) => (
                            <span key={tag} className="tech-tag">
                                <FaCode className="tag-icon" /> {tag}
                            </span>
                        ))}
                    </div>
                )}

                {/* Action Buttons */}
                <div className="project-actions">
                    {deployLink && (
                        <a 
                            href={deployLink} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="action-btn btn-primary"
                        >
                            <span>Live Demo</span>
                            <FaArrowUpRightFromSquare />
                        </a>
                    )}
                    <a 
                        href={github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="action-btn btn-secondary"
                    >
                        <FaGithub />
                        <span>Code</span>
                    </a>
                </div>
            </div>
        </article>
    );
}

export default ProjectCard;