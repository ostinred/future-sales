import React from 'react';
import { NavLink } from 'react-router-dom';
import { HOME_PAGE, SERVICE_PAGE } from '../router/routes';

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
    </div>
  );
};

export default NavBar;
