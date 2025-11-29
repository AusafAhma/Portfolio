import React from 'react';
import { FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <p className="footer-text">
                        Built with <FaHeart className="heart-icon" /> by{' '}
                        <span className="gradient-text">Syed Ausaf Ahmad</span>
                    </p>
                    <p className="footer-copyright">
                        © {currentYear} All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
