import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { to: 'home', label: 'Home' },
        { to: 'about', label: 'About' },
        { to: 'skills', label: 'Skills' },
        { to: 'education', label: 'Education' },
        { to: 'projects', label: 'Projects' },
        { to: 'contact', label: 'Contact' },
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
            <div className="container">
                <div className="navbar-content">
                    <Link to="home" smooth duration={500} className="navbar-logo">
                        <span className="gradient-text">Syed Ausaf</span>
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="navbar-menu">
                        {navLinks.map((link) => (
                            <li key={link.to}>
                                <Link
                                    to={link.to}
                                    smooth
                                    duration={500}
                                    spy={true}
                                    activeClass="active"
                                    offset={-70}
                                    className="navbar-link"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="mobile-menu-toggle"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`mobile-menu ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            smooth
                            duration={500}
                            spy={true}
                            activeClass="active"
                            offset={-70}
                            className="mobile-menu-link"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
