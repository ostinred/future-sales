import { v4 } from 'uuid';
import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  CHECKOUT_PAGE,
  CREATE_SALE_PAGE,
  DEALS_PAGE,
  HOME_PAGE,
  PRODUCT_PAGE,
  PROFILE_PAGE,
} from '../router/routes';

const nav = [
  {
    page: 'Homepage',
    link: HOME_PAGE,
  },
  { page: 'Create sale', link: CREATE_SALE_PAGE },
  { page: 'Checkout', link: CHECKOUT_PAGE },
  { page: 'Deals', link: DEALS_PAGE },
  { page: 'Profile', link: PROFILE_PAGE },
  { page: 'Product', link: PRODUCT_PAGE },
];

const NavBar = () => {
  return (
    <div className="nav-links">
      <ul>
        {nav.map(({ page, link }) => {
          return (
            <li key={v4()}>
              <NavLink
                activeClassName="is-active"
                className="nav-link"
                to={link}>
                {page}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavBar;
