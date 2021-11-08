import {BrowserRouter as Router, Route} from 'react-router-dom';

import  Rockets from './Rockets';
import Missions from './Missions';
import Profile from './Profile';

const Nav = () => (
    <Router>
      <div>
    <Route  path="/" component={Rockets} exact />
    <Route  path="/Missions" component={Missions} />
    <Route  path="/Profile" component={Profile} />
    </div>
  </Router>
);

export default Nav;