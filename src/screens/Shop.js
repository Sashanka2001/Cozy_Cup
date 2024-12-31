import React, { useContext } from 'react'; // Add useContext
import shopBg from '../assets/Shop_bg.jpg';
import './Shop.css';
import { useCart } from '../contexts/CartContext'; // Corrected import
import { useNavigate } from 'react-router-dom'; //navigate the cart
 

const Shop = () => {
    const { addToCart } = useCart();  // Access addToCart from context
    const navigate = useNavigate(); //navigate the cart

    const handleAddToCart = (item) => {
        addToCart(item);
        navigate('/shopping-cart'); //navigate the cart
    };

    return (
        <div className="shop-container" style={{ backgroundImage: `url(${shopBg})` }}>
            <main>
                <section className="all-products-section">
                    <h1>ALL PRODUCTS</h1>
                    
                    <div className="category-section">
                        <h2>Food </h2>
                        <div className="product-grid">
                            <div className="product-card">
                                <img src="https://pauladeenmagazine.com/wp-content/uploads/2018/06/fd2.jpg" />
                                <h2>Garlic bread</h2>
                                  <h5><p>Crispy and golden, loaded with savory garlic and buttery flavors—perfect as a snack or side dish.</p></h5>
                                  <p><b>Price = Rs.500</b> </p>
                                  <button onClick={() => handleAddToCart({ name: 'Garlic bread', price: 500 })} className="buy-button">Add to cart</button>
                            </div>

                            <div className="product-card">
                                <img src="https://static1.squarespace.com/static/5d4db21e02c9a3000161e7e6/5e12086562ad5d43f3bd8ea7/648a14c40de86f50ee2f6e73/1686777935999/4F7A5162.jpg?format=1500w" />
                                <h2>Croissant</h2>
                                <h5><p>Flaky, buttery layers of goodness, freshly baked to perfection. Ideal for breakfast or tea.</p></h5>
                                    <p><b>Price = Rs.300 </b></p>
                                 <button onClick={() => handleAddToCart({ name: 'Croissant', price: 300 })} className="buy-button">Add to cart</button>
                            </div>

                            <div className="product-card">
                            <img src="https://montougo.ca/wp-content/uploads/2024/10/bahnmi-daikon-1500x1500.jpg" />
                                 <h2>Sandwitch</h2>
                                 <h5><p>A wholesome delight stuffed with fresh veggies, meats, and flavorful sauces, made to satisfy.</p></h5>
                                    <p><b>Price = Rs.700</b> </p>
                                 <button onClick={() => handleAddToCart({ name: 'Sandwitch', price: 700 })} className="buy-button">Add to cart</button>
                            </div>

                            <div className="product-card">
                                <img src="https://img.freepik.com/premium-photo/hamburger-table-restaurant_807701-2420.jpg" />
                                <h2>Burger</h2>
                                <h5><p>Juicy and hearty, stacked with premium ingredients for an unbeatable taste.</p></h5>
                                    <p><b>Price = Rs.1000</b> </p>
                                  <button onClick={() => handleAddToCart({ name: 'Burger', price: 1000 })} className="buy-button">Add to cart</button>
                            </div>
                        </div>
                    </div>

                    {/* Desserts Section */}
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

                    {/* Beverages Section */}
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
                </section>
            </main>
        </div>
    );
};

export default Shop;