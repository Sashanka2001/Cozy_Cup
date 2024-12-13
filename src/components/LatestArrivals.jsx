import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LatestArrivals = () => {
    const [latestProducts, setLatestProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch the latest products
        const fetchLatestProducts = async () => {
            try {
                const response = await axios.get('http://localhost:8081/api/products/latest');
                setLatestProducts(response.data);
            } catch (error) {
                console.error('Error fetching latest products:', error);
            }
        };

        fetchLatestProducts();
    }, []);

    // Redirect to the product details page
    const handleProductClick = (productId) => {
        navigate(`/product/${productId}`);
    };

    return (
        <section className="latest-arrivals-section">
            <div className="product-container">
                <h2 className="section-title">Latest Arrivals</h2>
                <div className="product-grid">
                    {latestProducts.map((product) => (
                        <div
                            key={product.productID}
                            className="product-card"
                            onClick={() => handleProductClick(product.productID)}
                            style={{ cursor: 'pointer' }}
                        >
                            <div className="product-image-container">
                                <img
                                    src={product.productImage || 'default_image.jpg'}
                                    alt={product.productName}
                                    className="product-image"
                                />
                            </div>
                            <div className="product-details">
                                <div className="product-header">
                                    <h6 className="product-name">{product.productName}</h6>
                                    <h6 className="product-price">Rs. {(product.price)}</h6>
                                </div>
                                <p className="product-description">Size: {product.productSize}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatestArrivals;
