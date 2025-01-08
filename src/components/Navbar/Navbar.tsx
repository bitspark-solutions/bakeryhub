import React, { useState, useEffect } from 'react';
import './Navbar.css';

interface NavLink {
    to: string;
    label: string;
}

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);

    const navLinks: NavLink[] = [
        { to: "hero", label: "Home" },
        { to: "about", label: "About" },
        { to: "menu", label: "Menu" },
        { to: "events", label: "Events" },
        { to: "contact", label: "Contact" }
    ];

    useEffect(() => {
        const handleScroll = (): void => {
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

    const scrollToSection = (sectionId: string): void => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-brand">
                <button onClick={() => scrollToSection('hero')} className="logo">
                    Bakery
                </button>
            </div>

            <button 
                className={`nav-toggle ${isOpen ? 'active' : ''}`} 
                aria-label="toggle navigation"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="hamburger"></span>
            </button>

            <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                <ul>
                    {navLinks.map((link) => (
                        <li key={link.to}>
                            <button 
                                onClick={() => scrollToSection(link.to)}
                                className="nav-link"
                            >
                                {link.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
