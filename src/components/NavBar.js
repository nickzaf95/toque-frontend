import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <ul>
      <li>
        <NavLink
        to="/home"
        exact
        // style={Link}
        >
          Home
        </NavLink>
      </li>
      
      <li>
        <NavLink
        to="/recipes"
        exact
        // style={Link}
        >
          My Recipes
        </NavLink>
      </li>

      <li>
        <NavLink
        to="/families"
        exact
        // style={Link}
        >
          Families
        </NavLink>
      </li>

      <li>
        <NavLink
        to="/create-recipe"
        exact
        // style={Link}
        >
          Create Recipe
        </NavLink>
      </li>

      <li>
        <NavLink
        to="/create-family"
        exact
        // style={Link}
        >
          Create Family
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
        // style={Link}
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
        // style={Link}
        >
          Sign Up
        </NavLink>
      </li>
    }

    </ul>
  );
};

export default NavBar;
