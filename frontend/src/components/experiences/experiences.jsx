import React from 'react';
import { 
  FaCalendarDays, 
  FaLocationDot, 
  FaChevronRight, 
  FaBuilding 
} from 'react-icons/fa6';

function ExperienceCard({ title, info, dates, bullets = [] }) {
    const isPresent = dates.toLowerCase().includes('present');

    return (
        <article className={`experience-card ${isPresent ? 'is-active' : ''}`}>
            {/* Timeline Left Node Indicator */}
            <div className="timeline-node">
                <span className="node-dot" />
            </div>

            <div className="card-inner">
                {/* Header Row */}
                <div className="card-top-row">
                    <div className="role-meta">
                        <h3 className="role-title">{title}</h3>
                        <div className="org-wrapper">
                            <FaBuilding className="org-icon" />
                            <span className="org-name">{info}</span>
                        </div>
                    </div>

                    <div className="date-badge-wrapper">
                        <span className={`date-badge ${isPresent ? 'date-badge-active' : ''}`}>
                            <FaCalendarDays className="date-icon" />
                            {dates}
                            {isPresent && <span className="live-pulse" />}
                        </span>
                    </div>
                </div>

                {/* Bullet Points */}
                {bullets.length > 0 && (
                    <ul className="bullet-list">
                        {bullets.map((bullet, index) => (
                            <li key={index} className="bullet-item">
                                <FaChevronRight className="bullet-arrow" />
                                <span>{bullet}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </article>
    );
}

export default ExperienceCard;