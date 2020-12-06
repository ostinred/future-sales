import { Router, Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from '../pages/Home';

import CreateSale from '../pages/CreateSale.js';
import Checkout from '../pages/Checkout';
import Deals from '../pages/Deals';
import Profile from '../pages/Profile';
import Product from '../pages/Product';

import {
  CREATE_SALE_PAGE,
  HOME_PAGE,
  CHECKOUT_PAGE,
  DEALS_PAGE,
  PROFILE_PAGE,
  PRODUCT_PAGE,
} from './routes';

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
