import { Router, Route, Switch, Redirect, useHistory } from 'react-router-dom';

import Home from '../pages/Home';
import Service from '../pages/Service';
import { HOME_PAGE, SERVICE_PAGE } from './routes';

const Routes = () => {
  const history = useHistory();

  return (
    <Router history={history}>
      <Route
        render={() => {
          return (
            <Switch>
              <Route exact path={HOME_PAGE} component={Home} />
              <Route exact path={SERVICE_PAGE} component={Service} />
              <Redirect to={HOME_PAGE} />
            </Switch>
          );
        }}
      />
    </Router>
  );
};

export default Routes;
