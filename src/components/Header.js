import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../images/logo.svg';
import { HOME_PAGE } from '../router/routes';

const Header = () => {
  return (
    <header className="is-header">
      <NavLink to={HOME_PAGE}>
        <img src={logo} alt="" />
      </NavLink>
    </header>
  );
};

export default Header;
