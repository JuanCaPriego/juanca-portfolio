import React from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import './Hobbies.css';
import { getHobbyPost } from "../lib/posts";

const formatDate = (date) =>
    date
        ? date.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })
        : "";

const HobbyPost = () => {
    const { slug } = useParams();
    const post = getHobbyPost(slug);

    if (!post) {
        return <Navigate to="/hobbies" replace />;
    }

    return (
        <div className="hobbies-page">
            <article className="hobby-post">
                <Link to="/hobbies" className="hobby-back-link">&larr; Back to Hobbies</Link>
                <h1>{post.title}</h1>
                <p className="hobby-card-date">{formatDate(post.date)}</p>
                {post.tags.length > 0 && (
                    <div className="hobby-card-tags">
                        {post.tags.map((tag) => (
                            <span key={tag} className="hobby-tag">{tag}</span>
                        ))}
                    </div>
                )}
                {post.cover && (
                    <img src={post.cover} alt={post.title} className="hobby-post-cover" />
                )}
                <div className="hobby-post-content">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
                </div>
            </article>
        </div>
    )
}

export default HobbyPost;
