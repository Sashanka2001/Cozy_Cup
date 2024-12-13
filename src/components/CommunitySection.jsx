import React from 'react';

const CommunitySection = () => {
    return (
        <section className="community-section">
            <div className="about-container">
                <div className="content">
                    <div className="text-content">
                        <h2 className="title">
                        "Taste & Comfort for Your Soul"
                        </h2>
                        <p className="description">
                        Experience the perfect blend of flavor and coziness at our café. Our carefully curated selection of beverages and treats is crafted to bring warmth, style, and a delightful atmosphere to every moment.
                         </p>
                        <a href="http://localhost:3000/shop">
                        <button className="get-started-btn">Shop Now</button>
                        </a>
                    </div>
                    <img
                        className="image"
                        src="https://www.allrecipes.com/thmb/vU-8mACV9ho_NlCJP300rOA1SJ4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-19037-Dessert-Crepes-DDMFS-4x3-18ea3910686141d5aa4a43ffcd926dc5.jpg"
                        alt="Bedsheet collection"
                    />
                </div>
            </div>
        </section>
    );
};

export default CommunitySection;
