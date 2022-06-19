import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import './Home.css'

const Home = () => {
    const [user] = useAuthState(auth);

    const logOut = () => {
        signOut(auth);
    }
    return (
        <div className='home-container'>
            <div className='container-nav'>
                <nav className='navlink'>
                    <>
                        <NavLink className={({ isActive }) => (isActive ? "active-link" : "normal-link")} to="/">Dashboard</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? "active-link" : "normal-link")} to="/listing">Listing</NavLink>
                        {
                            user && <span className='logout' onClick={logOut}>Logout</span>
                        }
                    </>


                </nav>

                <Outlet />
            </div>
            <div>

            </div>
        </div >
    );
};

export default Home;