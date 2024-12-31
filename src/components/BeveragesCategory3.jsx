import React from 'react';
import { useCart } from '../contexts/CartContext'; // Import CartContext
import { useNavigate } from 'react-router-dom'; //navigate the cart

 const BeveragesCategory3 = () => {
     const { addToCart } = useCart(); // Use addToCart from the CartContext
      const navigate = useNavigate(); //navigate the cart
 
     const handleAddToCart = (item) => {
         addToCart(item);
         navigate('/shopping-cart');//navigate the cart
     };

    return (
        <div className="category-section">
        <h2>Beverages</h2>
        <div className="product-grid">
            <div className="product-card">
                <img src="https://m.media-amazon.com/images/I/61L3CzrO76L.jpg" />
                <h2>Cappuccino</h2>
                <h5><p>A perfect blend of bold espresso and velvety froth for a comforting pick-me-up.</p></h5>
                    <p><b>Price = Rs.600 </b></p>
                 <button onClick={() => handleAddToCart({ name: 'Cappuccino', price: 600 })} className="buy-button">Add to cart</button>
            </div>

            <div className="product-card">
                <img src="https://www.rachelcooks.com/wp-content/uploads/2024/10/oat-milk-hot-chocolate-1500-11-square.jpg" />
                <h2>Hot choclate</h2>
                <h5><p>A warm, rich drink made with premium chocolate to soothe your soul.</p></h5>
                    <p><b>Price = Rs.400</b> </p>
                  <button onClick={() => handleAddToCart({ name: 'Hot choclate', price: 400 })} className="buy-button">Add to cart</button>
            </div>

            <div className="product-card">
                <img src="https://m.media-amazon.com/images/I/71BSVR7LQZL.jpg" />
                <h2> Coffee</h2>
                <h5><p>Brewed fresh, aromatic, and energizing—your go-to beverage for any time of day.</p></h5>
                    <p><b>Price = Rs.600</b> </p>
                 <button onClick={() => handleAddToCart({ name: 'Coffee', price: 600 })} className="buy-button">Add to cart</button>
            </div>
            
            <div className="product-card">
                  <img src="https://www.throughthefibrofog.com/wp-content/uploads/2022/02/apple-and-pear-smoothie-3.jpg" />
                <h2>Smothies</h2>
                <h5><p>Cool, refreshing, and packed with natural fruits for a healthy boost.</p></h5>
                    <p><b>Price = Rs.800 </b></p>
                 <button onClick={() => handleAddToCart({ name: 'Smothies', price: 800 })} className="buy-button">Add to cart</button>
            </div>
        </div>
    </div>
    );
};

export default BeveragesCategory3;