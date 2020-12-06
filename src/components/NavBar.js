import React from 'react';
import { NavLink } from 'react-router-dom';
import { HOME_PAGE, SERVICE_PAGE, CREATE_SELLING } from '../router/routes';

const NavBar = () => {
  return (
    <div className="nav-links">
      <NavLink activeClassName="is-active" className="nav-link" to={HOME_PAGE}>
        Homepage
      </NavLink>
      <NavLink
        activeClassName="is-active"
        className="nav-link"
        to={SERVICE_PAGE}>
        Service
      </NavLink>
      <NavLink
        activeClassName="is-active"
        className="nav-link"
        to={CREATE_SELLING}>
        Create Selling
      </NavLink>
    </div>
  );
};

export default NavBar;
