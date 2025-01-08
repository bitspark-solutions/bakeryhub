import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-brand">
                <Link to="/" className="logo">
                    Brand Logo
                </Link>
            </div>

            <button 
                className={`nav-toggle ${isOpen ? 'active' : ''}`} 
                aria-label="toggle navigation"
                onClick={toggleMenu}
            >
                <span className="hamburger"></span>
            </button>

            <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                <ul>
                    <li><Link to="/" className="active">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
