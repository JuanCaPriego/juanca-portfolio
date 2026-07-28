import React from "react";
import './Projects.css';
import projects from "../data/projects";

const Projects = () => {
    return(
        <div className="projects-page">
            <div className="projects-desc">
                <h1>Projects</h1>
                <p>A selection of things I've built, from embedded hardware to mobile apps.</p>
            </div>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.title} className="project-card">
                        <div className="project-card-head">
                            <h2>{project.title}</h2>
                            <span className="project-year">{project.year}</span>
                        </div>
                        <p className="project-description">{project.description}</p>
                        {project.tags.length > 0 && (
                            <div className="project-tags">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="project-tag">{tag}</span>
                                ))}
                            </div>
                        )}
                        <div className="project-links">
                            {project.repo && (
                                <a href={project.repo} target="_blank" rel="noreferrer">Code</a>
                            )}
                            {project.demo && (
                                <a href={project.demo} target="_blank" rel="noreferrer">Live demo</a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;
