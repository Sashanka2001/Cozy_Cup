import React, { useState, useEffect } from 'react';
import { Layout, Menu, Badge, Input } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import ProfileIcon from './ProfileIcon';
import './Navbar.css';
import { useCart } from '../contexts/CartContext'; // Import useCart to get the cart state

const { Header } = Layout;

const Navbar = ({ location, onSearch }) => {
    const { cartItems } = useCart(); // Access cart items from context
    const [searchTerm, setSearchTerm] = useState('');
    const router = useNavigate();

    // Calculate the total quantity of items in the cart
    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);

        if (location.pathname === '/shop') {
            onSearch(value); // Notify Layout about the search term
        }
    };

    const handleOnClick = () => {
        router('/shopping-cart');
    };

    return (
        <Header
            style={{
                position: 'fixed',
                zIndex: 1,
                width: '100%',
                height: '64px',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#001529',
            }}
        >
            {/* Logo */}
            <div
                className="logo"
                style={{
                    color: 'white',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    marginRight: 'auto',
                }}
            >
                COZY_CUP
            </div>

            {/* Centered Menu Links */}
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}
            >
                <Menu.Item key="1">
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/shop">Shop</Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="/about">About</Link>
                </Menu.Item>
                <Menu.Item key="4">
                    <Link to="/contact">Contact</Link>
                </Menu.Item>
            </Menu>

            {/* Search Input */}
            <Input
                placeholder="Search for products..."
                value={searchTerm}
                onChange={handleSearch}
                style={{
                    borderRadius: '20px',
                    width: '300px',
                    marginRight: '16px',
                    border: 'none',
                    padding: '8px 16px',
                }}
            />

             {/* Cart Icon with Badge */}
            <div className="cart-icon-container" onClick={handleOnClick}>
                <ShoppingCartOutlined
                    style={{
                        fontSize: '1.5rem',
                        color: 'white',
                        marginRight: '16px',
                    }}
                />
                {totalQuantity > 0 && (
                    <div className="cart-icon-badge">
                        {totalQuantity}
                    </div>
                )}
            </div>

            {/* Profile Icon */}
            <ProfileIcon />
        </Header>
    );
};

export default Navbar;
