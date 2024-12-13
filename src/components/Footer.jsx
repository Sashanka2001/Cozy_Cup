import React from 'react';

const Footer = () => {
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
                    <li><a href="http://localhost:3000/shop" className="footer-link">Products</a></li>
                    <li><a href="#" className="footer-link">Resources</a></li>
                    <li><a href="#" className="footer-link">Blogs</a></li>
                    <li><a href="http://localhost:3000/contact" className="footer-link">Support</a></li>
                </ul>

                <div className="footer-socials">
                    <a href="#" className="footer-social-link">
                        <svg className="footer-social-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none">
                            {/* Twitter icon path */}
                        </svg>
                    </a>
                    <a href="#" className="footer-social-link">
                        <svg className="footer-social-icon" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* Instagram icon path */}
                        </svg>
                    </a>
                    <a href="#" className="footer-social-link">
                        <svg className="footer-social-icon" viewBox="0 0 15 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* Facebook icon path */}
                        </svg>
                    </a>
                    <a href="#" className="footer-social-link">
                        <svg className="footer-social-icon" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* YouTube icon path */}
                        </svg>
                    </a>
                </div>

                <span className="footer-copyright">
                    ©<a href="https://pagedone.io/" className="footer-copyright-link">COZY_CUP</a> 2025, All rights reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;
