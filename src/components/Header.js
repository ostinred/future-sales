import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';

import logo from '../images/logo.svg';
import { HOME_PAGE } from '../router/routes';

const Header = ({ back, title, children }) => {
  const history = useHistory();
  const onBackClick = () => history.goBack();

  return (
    <header className="is-header">
      {back ? (
        <div onClick={onBackClick}>
          <i className="icon-arrow-left" />
        </div>
      ) : (
        <NavLink to={HOME_PAGE}>
          <img src={logo} alt="" />
        </NavLink>
      )}

      <div className="is-header__title">{title || null}</div>

      <div className="is-header__children">{children}</div>
    </header>
  );
};

export default Header;
