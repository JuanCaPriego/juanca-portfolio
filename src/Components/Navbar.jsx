import React from "react";
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <nav className="navbar">
            <ul>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/hobbies">Hobbies</Link>
                <Link to="/cv">CV</Link>
            </ul>
        </nav>
    )
} 

export default Navbar;