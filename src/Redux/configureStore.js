import { createStore, combineReducers, applyMiddleware } from './node_modules/redux';
import logger from './node_modules/redux-logger';
import thunk from './node_modules/redux-thunk';
import missionsReducer from './missions/missions';
import rocketsReducer from './rockets/rockets';

const reducer = combineReducers({
  missionsReducer,
  rocketsReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
