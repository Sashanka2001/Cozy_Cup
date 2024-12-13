import React, { useState } from 'react';
import { Layout, Menu, Badge, Input } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import ProfileIcon from './ProfileIcon';
import axios from 'axios';

const { Header } = Layout;

const Navbar = ({ location, onSearch }) => {
    const router = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        const value = e.target.value; // Access value correctly
        setSearchTerm(value);

        if (location.pathname === '/shop') {
            onSearch(value); // Notify Layout about the search term
        }
    };

    const handleOnCLick = () => {
        router('/shopping-cart');
    }

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

            {/* Search Bar - Only on Shop Route */}
            {location.pathname === '/shop' && (
                <Input
                    placeholder="Search for products..."
                    value={searchTerm}
                    onChange={handleSearch} // Pass the full event object
                    style={{
                        borderRadius: '20px',
                        width: '300px',
                        marginRight: '16px',
                        border: 'none',
                        padding: '8px 16px',
                    }}
                />
            )}

            {/* Cart Icon with Badge */}
            <Badge offset={[10, 0]} onClick={handleOnCLick}>
                <ShoppingCartOutlined
                    style={{ fontSize: '1.5rem', color: 'white', marginRight: '16px' }}
                />
            </Badge>

            {/* Profile Icon */}
            <ProfileIcon />
        </Header>
    );
};

export default Navbar;
