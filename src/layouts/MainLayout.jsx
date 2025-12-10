import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/common/Navbar';

const MainLayout = () => {
    return (
        <div className="app-main">
            <Navbar />
            <div className="layout-content">
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;
