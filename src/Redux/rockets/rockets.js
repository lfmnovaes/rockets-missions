const ADD_RESERVE = 'spaceHub/rockets/ADD_RESERVE';
const CANCEL_RESERVE = 'spaceHub/rockets/CANCEL_RESERVE';
const GET_ROCKETS = 'spaceHub/rockets/GET_ROCKETS';

const initialState = [];

export const getRockets = () => (dispatch) => {
  fetch('https://api.spacexdata.com/v3/rockets')
    .then((res) => res.json())
    .then((resResponse) => dispatch({
      type: GET_ROCKETS,
      payload: resResponse,
    }));
};

export const AddReserve = (payload) => ({
  type: ADD_RESERVE,
  payload,
});

export const CancelReserve = (payload) => ({
  type: CANCEL_RESERVE,
  payload,
});

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RESERVE:
      const newState = state.map(rocket => {
        if(rocket.id !== action.payload) 
            return rocket;
        return { ...rocket, reserved: true };
      });
      return newState;
    case CANCEL_RESERVE:
      const newStateCancel = state.map(rocket => {
        if(rocket.id !== action.payload) 
            return rocket;
        return { ...rocket, reserved: false };
      });
      return newStateCancel;
    case GET_ROCKETS:
      return  [
        ...state,
        ...action.payload,
      ];
    
    default:
      return state;
  }
};

export default rocketsReducer;
