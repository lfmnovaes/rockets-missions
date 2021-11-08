const ADD_ROCKET = 'spaceHub/rockets/ADD_ROCKET';
const REMOVE_ROCKET = 'spaceHub/rockets/REMOVE_ROCKET';
const GET_ROCKETS = 'spaceHub/rockets/GET_ROCKETS';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ROCKET:
      // postRocket(action.payload);
      return [
        ...state,
        action.payload,
      ];
    case REMOVE_ROCKET:
      // deleteRocket(action.payload);
      // return state.filter((rocket) => rocket.id !== action.payload);
      return state;
    case GET_ROCKETS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
