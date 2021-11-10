const JOIN_MISSION = 'spaceHub/missions/JOIN_MISSION';
const LEAVE_MISSION = 'spaceHub/missions/LEAVE_MISSION';
const GET_MISSIONS = 'spaceHub/missions/GET_MISSIONS';

const API_URL = 'https://api.spacexdata.com/v3/missions';

const initialState = [];

export const getMissions = () => async (dispatch) => {
  await fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      const missions = [];
      data.forEach((el) => {
        missions.push({
          mission_id: el.mission_id,
          mission_name: el.mission_name,
          description: el.description,
          reserved: false,
        });
      });
      dispatch({
        type: GET_MISSIONS,
        payload: missions,
      });
    });
};

export const joinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

export const leaveMission = (payload) => ({
  type: LEAVE_MISSION,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case JOIN_MISSION:
      return state.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { ...mission, reserved: true };
        }
        return mission;
      });
    case LEAVE_MISSION:
      return state.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { ...mission, reserved: false };
        }
        return mission;
      });
    case GET_MISSIONS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
