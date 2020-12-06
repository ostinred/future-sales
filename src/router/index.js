import { Router, Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from '../pages/Home';

import CreateSale from '../pages/CreateSale.js';
import Checkout from '../pages/Checkout';
import Deals from '../pages/Deals';
import Profile from '../pages/Profile';
import Product from '../pages/Product';
import WishList from '../pages/WishList';
import TopSales from '../pages/TopSales';

import {
  CREATE_SALE_PAGE,
  HOME_PAGE,
  CHECKOUT_PAGE,
  DEALS_PAGE,
  PROFILE_PAGE,
  PRODUCT_PAGE,
  WISHLIST_PAGE,
  NOTIFICATION_PAGE,
  SEARCH_PAGE,
  MOST_POPULAR_PAGE,
  TOP_SALES_PAGE,
  LATEST_PAGE,
} from './routes';
import React from 'react';
import Notifications from '../pages/Notifications';
import Search from '../pages/Search';
import MostPopular from '../pages/MostPopular';
import Latest from '../pages/Latest';

const Routes = () => {
  const history = useHistory();

  return (
    <Router history={history}>
      <Route
        render={() => {
          return (
            <AnimatePresence>
              <Switch>
                <Route exact path={HOME_PAGE} component={Home} />
                <Route exact path={CREATE_SALE_PAGE} component={CreateSale} />
                <Route exact path={CHECKOUT_PAGE} component={Checkout} />
                <Route exact path={DEALS_PAGE} component={Deals} />
                <Route exact path={PRODUCT_PAGE} component={Product} />
                <Route exact path={PROFILE_PAGE} component={Profile} />
                <Route exact path={WISHLIST_PAGE} component={WishList} />
                <Route exact path={SEARCH_PAGE} component={Search} />
                <Route exact path={MOST_POPULAR_PAGE} component={MostPopular} />
                <Route exact path={TOP_SALES_PAGE} component={TopSales} />
                <Route exact path={LATEST_PAGE} component={Latest} />
                <Route
                  exact
                  path={NOTIFICATION_PAGE}
                  component={Notifications}
                />

                <Redirect to={HOME_PAGE} />
              </Switch>
            </AnimatePresence>
          );
        }}
      />
    </Router>
  );
};

export default Routes;
