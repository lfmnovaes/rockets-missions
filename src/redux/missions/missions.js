const ADD_MISSION = 'spaceHub/missions/ADD_MISSION';
const REMOVE_MISSION = 'spaceHub/missions/REMOVE_MISSION';
const GET_MISSIONS = 'spaceHub/missions/GET_MISSIONS';

const API_URL = 'https://api.spacexdata.com/v3/missions';

const initialState = [];

export const getMissions = () => async (dispatch) => {
  let missions = [];
  await fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      missions = data;
    });
  console.log('missions', missions);
  dispatch({
    type: GET_MISSIONS,
    payload: missions,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MISSION:
      // postMission(action.payload);
      return [
        ...state,
        action.payload,
      ];
    case REMOVE_MISSION:
      // deleteMission(action.payload);
      // return state.filter((mission) => mission.id !== action.payload);
      return state;
    case GET_MISSIONS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
