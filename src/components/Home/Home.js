import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return (
        <div className='home-container'>
            <div className='container'>
                <nav className='navlink'>
                    <NavLink className={({ isActive }) => (isActive ? "active-link" : "normal-link")} to="/">Dashboard</NavLink>
                    <NavLink className={({ isActive }) => (isActive ? "active-link" : "normal-link")} to="/listing">Listing</NavLink>

                </nav>
                <Outlet />
            </div>
            <div>

            </div>
        </div >
    );
};

export default Home;