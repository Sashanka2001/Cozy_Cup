import React from 'react';

const ConnectSection = () => {
    return (
        <section className="connect-section">
            <div className="connect-container">
                <div className="connect-content">
                    <div className="connect-text">
                        <h2 className="connect-heading">Connect with us</h2>
                        <p className="connect-description">
                            Contact us with any query or any idea.
                        </p>
                    </div>
                    <a href="http://localhost:3000/contact" className="connect-button">
                        Get In Touch
                        <svg
                            width="19"
                            height="14"
                            viewBox="0 0 19 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1.75 7L16.4167 7M11.8333 12.5L16.6852 7.64818C16.9907 7.34263 17.1435 7.18985 17.1435 7C17.1435 6.81015 16.9907 6.65737 16.6852 6.35182L11.8333 1.5"
                                stroke="#4F46E5"
                                strokeWidth="2.4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ConnectSection;
