import { v4 } from 'uuid';
import React from 'react';
import { NavLink } from 'react-router-dom';
import _ from 'lodash';

import {
  CREATE_SALE_PAGE,
  DEALS_PAGE,
  HOME_PAGE,
  PROFILE_PAGE,
  SHOP_PAGE,
  WISHLIST_PAGE,
} from '../router/routes';
import {useStore} from "../hooks/useStore";

const nav = [
  { page: 'Shop', link: HOME_PAGE, icon: 'icon-shop' },
  { page: 'Wishlist', link: WISHLIST_PAGE, icon: 'icon-wish' },
  { page: 'Create', link: CREATE_SALE_PAGE },
  { page: 'Deals', link: DEALS_PAGE, icon: 'icon-bag' },
  { page: 'Profile', link: PROFILE_PAGE, icon: 'icon-user' },
];

const NavBar = () => {
  const {
    getAllCommitments,
    getAllProducts,
    getUserInfo,
  } = useStore();
  const userInfo = getUserInfo();
  const myProductsCount = _.filter(getAllProducts(), (product) => {
    return product.seller === userInfo.id;
  }).length;
  const commitmentsCount = getAllCommitments().length;
  const totalCount = myProductsCount + commitmentsCount;

  return (
    <div className="nav-links">
      <ul>
        {nav.map(({ page, link, icon }) => {
          if (page === 'Create') {
            return (
              <li key={v4()}>
                <NavLink
                  activeClassName="is-active"
                  className="nav-link nav-link__create"
                  to={link}>
                  <span className="icon-plus">+</span>
                </NavLink>
              </li>
            );
          }
          return (
            <li key={v4()}>
              <NavLink
                exact
                activeClassName="is-active"
                className="nav-link"
                to={link}>
                {icon ? <i className={icon} /> : null}
                <span>{page}</span>
                {page === 'Deals' && totalCount > 0 && (
                  <span className='counter'>{totalCount}</span>
                )}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavBar;
