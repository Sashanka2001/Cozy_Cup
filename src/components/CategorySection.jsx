import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CategorySection.css';

const CategorySection = () => {
    const navigate = useNavigate();

    const categories = [
        {
            id: 1,  
            title: 'Food',
            description: 'Savory delights with a touch of luxury',
            imageUrl: 'https://www.eatingwell.com/thmb/fchLI7rLbosps8YY86Fg0WvaNMw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simple-1200-Calorie-Meal-Plan-30-Day-Week-4-square-1b62b48d21f44b268c060dd2ebe28e6b.jpg',
        },
        {
            id: 2, 
            title: 'Desserts',
            description: 'Decadent desserts crafted for pure indulgence',
            imageUrl: 'https://tmfcakedesigns.com/cdn/shop/products/TMFCakeDesigns_Xmas_25.jpg?v=1672791219&width=1500',
        },
        {
            id: 3, 
            title: 'Beverages',
            description: 'Refreshing beverages, pure bliss in every sip',
            imageUrl: 'https://www.rachelcooks.com/wp-content/uploads/2024/10/oat-milk-hot-chocolate-1500-11-square.jpg',
        },
    ];

    const handleCategoryClick = (id) => {
        navigate(`/category/${id}`); // Redirect to /category/:id
    };

    return (
        <section className="category-section">
            <div className="category-container">
                <h1 className="category-heading">Select a Category</h1>
                <div className="category-grid">
                    {categories.map((category) => (
                        <div key={category.id} className="category-card">
                            <img
                                className="category-image"
                                src={category.imageUrl}
                                alt={`Category ${category.title}`}
                            />
                            <div className="category-info">
                                <div className="category-text-content">
                                    <h4 className="category-title">{category.title}</h4>
                                    <p className="category-description">{category.description}</p>
                                </div>
                                <button
                                    className="category-button"
                                    onClick={() => handleCategoryClick(category.id)} // Pass id on button click
                                >
                                    <svg
                                        className="category-icon"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="17"
                                        height="16"
                                        viewBox="0 0 17 16"
                                        fill="none"
                                    >
                                        <path
                                            d="M9.62553 4L13.6664 8.0409M13.6664 8.0409L9.62553 12.0818M13.6664 8.0409L1.6665 8.0409"
                                            strokeWidth="1.6"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategorySection;
