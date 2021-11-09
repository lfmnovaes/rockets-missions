import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../redux/missions/missions';
import Mission from './Mission';

const Missions = () => {
  const dispatch = useDispatch();
  const missionsStore = useSelector((store) => store.missionsReducer);

  useEffect(() => {
    dispatch(getMissions());
  }, []);

  const missionList = missionsStore.map(
    (mission) => (
      <Mission key={mission.mission_id} data={mission} />
    ),
  );

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">ID</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tbody>
        {missionList}
      </tbody>
    </table>
  );
};

export default Missions;
