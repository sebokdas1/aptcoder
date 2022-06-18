import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return (
        <div className='home-container'>
            <nav className='navlink'>
                <NavLink className={({ isActive }) => (isActive ? "active-link" : "normal-link")} to="/">Dashboard</NavLink>
                <NavLink className={({ isActive }) => (isActive ? "active-link" : "normal-link")} to="/listing">Listing</NavLink>

            </nav>
            <Outlet />
        </div >
    );
};

export default Home;