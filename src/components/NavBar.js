import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
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

      { props.username ? 
      <li className="logout" onClick={ props.signOut }>
      <NavLink
      to="/sign-in"
      exact>
        Log Out
      </NavLink>
    </li>
    :
    <li>
        <NavLink
        to="/sign-in"
        exact
        >
          Sign in
        </NavLink>
      </li>
    }

    { props.username ? 
      null
    :
    <li>
        <NavLink
        to="/sign-up"
        exact
        >
          Sign Up
        </NavLink>
      </li>
    }

    </ul>
  );
};

export default NavBar;
