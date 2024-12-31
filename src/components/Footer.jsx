import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate from react-router-dom
import './Footer.css';

const Footer = () => {
    const navigate = useNavigate();  // Initialize navigate hook

    const handleNavigation = (path) => {
        navigate(path);  // Programmatically navigate to the path
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-logo">
                    <a href="https://pagedone.io/" className="footer-logo-link">
                        <svg className="footer-logo-svg" viewBox="0 0 164 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* Logo paths */}
                        </svg>
                    </a>
                </div>

                <ul className="footer-links">
                    <li>
                        <button onClick={() => handleNavigation('/shop')} className="footer-link">
                            Products
                        </button>
                    </li>
                    <li>
                        <button onClick={() => handleNavigation('/resources')} className="footer-link">
                            Resources
                        </button>
                    </li>
                    <li>
                        <button onClick={() => handleNavigation('/about')} className="footer-link">
                            Blogs
                        </button>
                    </li>
                    <li>
                        <button onClick={() => handleNavigation('/contact')} className="footer-link">
                            Support
                        </button>
                    </li>
                </ul>

                <span className="footer-copyright">
                    ©<a href="#" className="footer-link">COZY_CUP</a> 2025, All rights reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;
