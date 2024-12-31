import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate from react-router-dom

const CommunitySection = () => {
    const navigate = useNavigate();  // Initialize navigate hook

    const handleShopNowClick = () => {
        navigate('/shop');  // Navigate to /shop page
    };

    return (
        <section className="community-section">
            <div className="about-container">
                <div className="content">
                    <div className="text-content">
                        <h2 className="title">Welcome to COZY_CUP!</h2>
                        <p className="description">
                            Where flavors meet comfort, and every visit feels like home.
                            At Cozy_Cup, we believe in the magic of good food and great company. Established with a passion for bringing people together, our café is more than just a place to eat—it's a destination for connection, relaxation, and indulgence. Whether you're looking for a cozy spot to unwind, a delicious treat to savor, or a warm drink to uplift your spirits, we've got you covered. Welcome to our community, where every moment is a celebration.
                        </p>

                        <h2 className="title">"Taste & Comfort for Your Soul"</h2>
                        <p className="description">
                            Experience the perfect blend of flavor and coziness at our café. Our carefully curated selection of beverages and treats is crafted to bring warmth, style, and a delightful atmosphere to every moment.
                        </p>
                        <h2 className="title">Our story</h2>
                        <p className="description">
                            What started as a dream of creating a cozy spot to enjoy delicious food has now grown into a cherished gathering place for food lovers. From humble beginnings, we’ve poured our hearts into crafting a space where you can escape the hustle of daily life and savor the little moments. Inspired by the vibrant culture of community dining, we aim to make every bite, every sip, and every moment special.
                        </p>

                        {/* Replace anchor tag with button for programmatic navigation */}
                        <button onClick={handleShopNowClick} className="get-started-btn">Shop Now</button>
                    </div>
                    <img
                        className="image"
                        src="https://www.allrecipes.com/thmb/vU-8mACV9ho_NlCJP300rOA1SJ4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-19037-Dessert-Crepes-DDMFS-4x3-18ea3910686141d5aa4a43ffcd926dc5.jpg"alt="CommunitySection"
                    />
                </div>
            </div>
        </section>
    );
};

export default CommunitySection;
