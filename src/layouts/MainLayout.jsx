import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const MainLayout = () => {
    return (
        <div className="app-main">
            <Navbar />
            <div className="layout-content">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
