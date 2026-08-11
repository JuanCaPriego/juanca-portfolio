import React from "react";
import { Link } from "react-router-dom";
import './Projects.css';
import { projectPosts } from "../lib/posts";

const Projects = () => {
    return(
        <div className="projects-page">
            <div className="projects-desc">
                <h1>Projects</h1>
                <p>A selection of things I've built, from embedded hardware to mobile apps.</p>
            </div>
            <div className="projects-grid">
                {projectPosts.map((project) => (
                    <Link key={project.slug} to={`/projects/${project.slug}`} className="project-card">
                        <div className="project-card-head">
                            <h2>{project.title}</h2>
                            <span className="project-year">{project.date ? project.date.getFullYear() : ""}</span>
                        </div>
                        <p className="project-description">{project.excerpt}</p>
                        {project.tags.length > 0 && (
                            <div className="project-tags">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="project-tag">{tag}</span>
                                ))}
                            </div>
                        )}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Projects;
