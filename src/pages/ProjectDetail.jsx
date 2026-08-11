import React from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import './Projects.css';
import { getProjectPost } from "../lib/posts";

const ProjectDetail = () => {
    const { slug } = useParams();
    const project = getProjectPost(slug);

    if (!project) {
        return <Navigate to="/projects" replace />;
    }

    return (
        <div className="projects-page">
            <article className="project-post">
                <Link to="/projects" className="project-back-link">&larr; Back to Projects</Link>
                <div className="project-post-head">
                    <h1>{project.title}</h1>
                    <span className="project-year">{project.date ? project.date.getFullYear() : ""}</span>
                </div>
                {project.tags.length > 0 && (
                    <div className="project-tags">
                        {project.tags.map((tag) => (
                            <span key={tag} className="project-tag">{tag}</span>
                        ))}
                    </div>
                )}
                {project.cover && (
                    <img src={project.cover} alt={project.title} className="project-post-cover" />
                )}
                <div className="project-post-content">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{project.content}</ReactMarkdown>
                </div>
                {(project.repo || project.demo) && (
                    <div className="project-links">
                        {project.repo && (
                            <a href={project.repo} target="_blank" rel="noreferrer">Code</a>
                        )}
                        {project.demo && (
                            <a href={project.demo} target="_blank" rel="noreferrer">Live demo</a>
                        )}
                    </div>
                )}
            </article>
        </div>
    )
}

export default ProjectDetail;
