import React from "react";
import './CV.css';
import cv from "../data/cv";

const CV = () => {
    return(
        <div className="cv-page">
            <div className="cv-header">
                <div>
                    <h1>Juan Priego</h1>
                    <p className="cv-summary">{cv.summary}</p>
                </div>
                <a className="cv-download" href={`${import.meta.env.BASE_URL}resume.pdf`}>
                    Download PDF
                </a>
            </div>

            <div className="cv-contact">
                {cv.contact.email && <a href={`mailto:${cv.contact.email}`}>{cv.contact.email}</a>}
                {cv.contact.linkedin && <a href={cv.contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
                {cv.contact.github && <a href={cv.contact.github} target="_blank" rel="noreferrer">GitHub</a>}
                {cv.contact.location && <span>{cv.contact.location}</span>}
            </div>

            <section className="cv-section">
                <h2>Experience</h2>
                {cv.experience.map((job) => (
                    <div key={`${job.org}-${job.period}`} className="cv-entry">
                        <div className="cv-entry-head">
                            <h3>{job.role} · {job.org}</h3>
                            <span className="cv-entry-period">{job.period}</span>
                        </div>
                        {job.location && <p className="cv-entry-location">{job.location}</p>}
                        <ul>
                            {job.bullets.map((bullet) => (
                                <li key={bullet}>{bullet}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>

            <section className="cv-section">
                <h2>Education</h2>
                {cv.education.map((edu) => (
                    <div key={edu.degree} className="cv-entry">
                        <div className="cv-entry-head">
                            <h3>{edu.degree}</h3>
                            <span className="cv-entry-period">{edu.period}</span>
                        </div>
                        {edu.school && <p className="cv-entry-location">{edu.school}</p>}
                    </div>
                ))}
            </section>

            <section className="cv-section">
                <h2>Skills</h2>
                <div className="cv-skills">
                    {cv.skills.map((skill) => (
                        <span key={skill} className="cv-skill">{skill}</span>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default CV;
