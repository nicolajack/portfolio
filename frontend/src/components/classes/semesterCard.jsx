import React, { useState } from 'react';
import { 
  FaChevronDown, 
  FaBookOpen, 
  FaAward 
} from 'react-icons/fa6';

function SemesterCard({ semester, courses = [], defaultOpen = false, status }) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <article className={`semester-card ${isOpen ? 'is-open' : ''}`}>
            {/* Clickable Accordion Header */}
            <button 
                className="semester-header" 
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <div className="semester-info">
                    <h3 className="semester-title">{semester}</h3>
                    <span className="course-count">
                        {courses.length} {courses.length === 1 ? 'Course' : 'Courses'}
                    </span>
                    {status && <span className="status-badge">{status}</span>}
                </div>

                <div className="semester-toggle">
                    <span className="toggle-text">{isOpen ? 'Hide' : 'Show'}</span>
                    <FaChevronDown className={`toggle-icon ${isOpen ? 'rotate' : ''}`} />
                </div>
            </button>

            {/* Expandable Course List */}
            {isOpen && (
                <div className="semester-body">
                    <div className="courses-grid">
                        {courses.map((course, index) => (
                            <div key={index} className="course-item">
                                <div className="course-top">
                                    <div className="course-code-tag">
                                        <FaBookOpen className="course-icon" />
                                        <span>{course.code}</span>
                                    </div>
                                    {course.grade && (
                                        <span className="grade-badge">
                                            <FaAward className="grade-icon" /> {course.grade}
                                        </span>
                                    )}
                                </div>
                                <h4 className="course-name">{course.title}</h4>
                                <p className="course-description">{course.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </article>
    );
}

export default SemesterCard;