import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(i => i.name === item.name);
            
            if (existingItem) {
                return prevItems.map(i => 
                    i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
                );
            }
            return [...prevItems, { ...item, quantity: 1 }];
        });
    };

    const removeFromCart = (item) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(i => i.name === item.name);
            
            if (existingItem && existingItem.quantity > 1) {
                // If quantity is greater than 1, reduce by 1
                return prevItems.map(i => 
                    i.name === item.name ? { ...i, quantity: i.quantity - 1 } : i
                );
            } else {
                // If quantity is 1, remove the item completely
                return prevItems.filter(i => i.name !== item.name);
            }
        });
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
