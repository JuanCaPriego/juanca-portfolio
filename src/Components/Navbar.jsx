import React from "react";
import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return(
        <nav className="navbar">
            <ul>
                <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
                <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>Projects</NavLink>
                <NavLink to="/hobbies" className={({ isActive }) => isActive ? 'active' : ''}>Hobbies</NavLink>
                <NavLink to="/cv" className={({ isActive }) => isActive ? 'active' : ''}>CV</NavLink>
            </ul>
        </nav>
    )
}

export default Navbar;