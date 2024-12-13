import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from "../components/Footer";

function Layout() {
    const location = useLocation();
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (term) => {
        setSearchTerm(term); // Update the search term
    };

    return (
        <div className="layout-container">
            <Navbar location={location} onSearch={handleSearch} />
            <div className="content-container">
                {/* Pass searchTerm to Outlet */}
                <Outlet context={{ searchTerm }} />
            </div>
            <Footer />
        </div>
    );
}

export default Layout;
