import { Router, Route, Switch, useHistory } from 'react-router-dom';

import Home from '../pages/Home';
import Service from '../pages/Service';

const HOME = '/';
const SERVICE = '/service';

const Routes = () => {
  const history = useHistory();

  return (
    <Router history={history}>
      <Route
        render={() => {
          return (
            <Switch>
              <Route exact path={HOME} component={Home} />
              <Route exact path={SERVICE} component={Service} />
            </Switch>
          );
        }}
      />
    </Router>
  );
};

export default Routes;
