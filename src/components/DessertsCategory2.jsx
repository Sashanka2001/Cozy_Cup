import React from 'react';
import { useCart } from '../contexts/CartContext'; // Import CartContext
import { useNavigate } from 'react-router-dom'; //navigate the cart

 const DessertsCategory2 = () => {
     const { addToCart } = useCart(); // Use addToCart from the CartContext
      const navigate = useNavigate(); //navigate the cart
 
     const handleAddToCart = (item) => {
         addToCart(item);
         navigate('/shopping-cart');//navigate the cart
     };
     
    return (
        <div className="category-section">
        <h2>Desserts</h2>

        <div className="product-grid">
            <div className="product-card">
                <img src="https://www.cocoandbean.com.au/cdn/shop/files/new_website_photos_6.png?v=1725325518&width=1500" />
                <h2> Browinie </h2>
                <h5><p>Rich, fudgy, and irresistibly chocolatey—an all-time favorite indulgence.</p></h5>
                    <p><b>Price = Rs.500 </b></p>
                 <button onClick={() => handleAddToCart({ name: 'Browinie', price: 500 })} className="buy-button">Add to cart</button>
            </div>

            <div className="product-card">
                <img src="https://i5.walmartimages.com/asr/cf968fd9-85be-49f0-ae11-8103d942429d.a9634b8c8025cde5ef4a16e52f00034e.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF" />
                <h2> Muffine</h2>
                <h5><p>Soft and fluffy, bursting with flavors in every bite. A perfect grab-and-go treat.</p></h5>
                    <p><b>Price = Rs.200</b> </p>
                  <button onClick={() => handleAddToCart({ name: 'Muffine', price: 200 })} className="buy-button">Add to cart</button>
            </div>

            <div className="product-card">
                <img src="https://bakeology.ae/wp-content/uploads/2023/11/RED-VELVET-CAKE.jpg" />
                <h2>Red velvate cake</h2>
                <h5><p>Luxuriously moist layers with a velvety texture, topped with creamy frosting.</p></h5>
                    <p><b>Price = Rs.1200 </b></p>
                  <button onClick={() => handleAddToCart({ name: 'Red velvate cake', price: 1200 })} className="buy-button">Add to cart</button>
            </div>

            <div className="product-card">
                <img src="https://i0.wp.com/ovenfresh.in/wp-content/uploads/2023/02/Baked-Cherry-Cheese-Cake750gms1.jpg?fit=1500%2C1500&ssl=1" />
                <h2> Cheesecake</h2>
                <h5><p>Smooth, creamy, and melt-in-your-mouth perfection with a hint of tanginess.</p></h5>
                    <p><b>Price = Rs.1500</b> </p>
                 <button onClick={() => handleAddToCart({ name: 'Cheesecake', price: 1500 })} className="buy-button">Add to cart</button>
            </div>
        </div>
    </div>
    );
};

export default DessertsCategory2;
