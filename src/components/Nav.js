import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';

import  Rockets from './Rockets';
import Missions from './Missions';
import Profile from './Profile';

const Nav = () => (
    <Router>
      <div>
    <Routes>
    <Route  path="/" component={Rockets} exact />
    <Route  path="/Missions" component={Missions} />
    <Route  path="/Profile" component={Profile} />
    </Routes>
    </div>
  </Router>
);

export default Nav;