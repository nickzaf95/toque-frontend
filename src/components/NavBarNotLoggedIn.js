import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBarNotLoggedIn = (props) => {
  return (
    <ul className="navbar">
        <li>
            <NavLink
            to="/home"
            >
            Home
            </NavLink>
        </li>
        
        <li>
            <NavLink
            to="/sign-in"
            >
            Sign in
            </NavLink>
        </li>

        <li>
            <NavLink
            to="/sign-up"
            >
            Sign Up
            </NavLink>
        </li>
    
    </ul>
  );
};

export default NavBarNotLoggedIn;
