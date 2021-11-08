import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';

import  Rockets from './Rockets';
import Missions from './Missions';
import Profile from './Profile';

const Nav = () => (
    <Router>
      <div>
    <Switch>
    <Route  path="/" component={Rockets} exact />
    <Route  path="/Missions" component={Missions} />
    <Route  path="/Profile" component={Profile} />
    </Switch>
    </div>
  </Router>
);

export default Nav;