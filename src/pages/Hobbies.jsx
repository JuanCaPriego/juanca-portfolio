import React from "react";
import { Link } from "react-router-dom";
import './Hobbies.css';
import { hobbyPosts } from "../lib/posts";

const formatDate = (date) =>
    date
        ? date.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })
        : "";

const Hobbies = () => {
    return (
        <div className="hobbies-page">
            <div className="hobbies-desc">
                <h1>Hobbies</h1>
                <p>Climbing, alpinism, and running — notes from outside of work.</p>
            </div>
            <div className="hobbies-list">
                {hobbyPosts.map((post) => (
                    <Link key={post.slug} to={`/hobbies/${post.slug}`} className="hobby-card">
                        {post.cover && (
                            <img src={post.cover} alt={post.title} className="hobby-card-image" />
                        )}
                        <div className="hobby-card-body">
                            <h2>{post.title}</h2>
                            <p className="hobby-card-date">{formatDate(post.date)}</p>
                            <p className="hobby-card-excerpt">{post.excerpt}</p>
                            {post.tags.length > 0 && (
                                <div className="hobby-card-tags">
                                    {post.tags.map((tag) => (
                                        <span key={tag} className="hobby-tag">{tag}</span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Hobbies;
