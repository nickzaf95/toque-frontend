import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBarNotLoggedIn = (props) => {
  return (
    <ul>
      <li>
        <NavLink
        to="/home"
        exact
        >
          Home
        </NavLink>
      </li>
      
    <li>
        <NavLink
        to="/sign-in"
        exact
        >
          Sign in
        </NavLink>
      </li>


    
    <li>
        <NavLink
        to="/sign-up"
        exact
        >
          Sign Up
        </NavLink>
      </li>
    

    </ul>
  );
};

export default NavBarNotLoggedIn;
