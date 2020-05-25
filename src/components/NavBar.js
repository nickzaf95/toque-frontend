import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <ul className="navbar">
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
        to="/recipes"
        exact
        >
          My Recipes
        </NavLink>
      </li>

      <li>
        <NavLink
        to="/families"
        exact
        >
          Families
        </NavLink>
      </li>

      <li>
        <NavLink
        to="/create-recipe"
        exact
        >
          Create Recipe
        </NavLink>
      </li>

      <li>
        <NavLink
        to="/create-family"
        exact
        >
          Create Family
        </NavLink>
      </li>

      <li>
        <NavLink
        to="/join-family"
        exact
        >
          Join Family
        </NavLink>
      </li>

      
    <li className="logout" onClick={ props.signOut }>
      <NavLink
      to="/sign-in"
      exact>
        Log Out
      </NavLink>
    </li>
    
    </ul>
  );
};

export default NavBar;
