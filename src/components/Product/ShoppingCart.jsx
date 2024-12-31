import React from 'react';
import { useCart } from '../../contexts/CartContext';
import './ShoppingCart.css';

const ShoppingCart = () => {
  const { cartItems, removeFromCart } = useCart();

  // Define images for each product, matching them with the names in the cart
  const productImages = {
    'Garlic bread': 'https://pauladeenmagazine.com/wp-content/uploads/2018/06/fd2.jpg',
    'Croissant': 'https://static1.squarespace.com/static/5d4db21e02c9a3000161e7e6/5e12086562ad5d43f3bd8ea7/648a14c40de86f50ee2f6e73/1686777935999/4F7A5162.jpg?format=1500w',
    'Sandwitch': 'https://montougo.ca/wp-content/uploads/2024/10/bahnmi-daikon-1500x1500.jpg',
    'Burger': 'https://img.freepik.com/premium-photo/hamburger-table-restaurant_807701-2420.jpg',
    'Browinie': 'https://www.cocoandbean.com.au/cdn/shop/files/new_website_photos_6.png?v=1725325518&width=1500',
    'Muffine': 'https://i5.walmartimages.com/asr/cf968fd9-85be-49f0-ae11-8103d942429d.a9634b8c8025cde5ef4a16e52f00034e.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
    'Red velvate cake': 'https://bakeology.ae/wp-content/uploads/2023/11/RED-VELVET-CAKE.jpg',
    'Cheesecake': 'https://i0.wp.com/ovenfresh.in/wp-content/uploads/2023/02/Baked-Cherry-Cheese-Cake750gms1.jpg?fit=1500%2C1500&ssl=1',
    'Cappuccino': 'https://m.media-amazon.com/images/I/61L3CzrO76L.jpg',
    'Hot choclate': 'https://www.rachelcooks.com/wp-content/uploads/2024/10/oat-milk-hot-chocolate-1500-11-square.jpg',
    'Coffee': 'https://m.media-amazon.com/images/I/71BSVR7LQZL.jpg',
    'Smothies': 'https://www.throughthefibrofog.com/wp-content/uploads/2022/02/apple-and-pear-smoothie-3.jpg'
  };

  // Calculate total items and total price
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    // Redirect or perform checkout logic here
    window.location.href = '#'; // Adjust the URL based on your app's routing
  };

  return (
    <div className="cart-container">
      <h1 className="cart-header">Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty</p>
      ) : (
        <>
          <ul className="cart-item-list">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <img 
                  src={productImages[item.name]} 
                  alt={item.name} 
                  className="cart-item-image" 
                />
                <div className="cart-item-details">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-price">Rs. {item.price}</div>
                  <div className="cart-item-quantity">Quantity: {item.quantity}</div>
                </div>
                <button 
                  onClick={() => removeFromCart(item)} 
                  className="remove-button"
                >
                  Remove 
                </button>
              </li>
            ))}
          </ul>

          {/* Cart Summary Section */}
          <div className="cart-summary">
            <h3>Cart Summary</h3>
            <p>Total Items: <span id="total-items">{totalItems}</span></p>
            <p>Total Price: <span id="total-price">Rs. {totalPrice.toFixed(2)}</span></p>
            <button onClick={handleCheckout} className="checkout-button">Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
