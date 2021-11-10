import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import { getMissions } from '../redux/missions/missions';
import Mission from './Mission';

const Missions = () => {
  const dispatch = useDispatch();
  const missionsStore = useSelector((store) => store.missionsReducer);

  useEffect(() => {
    if (missionsStore.length === 0) {
      dispatch(getMissions());
    }
  }, []);

  const missionList = missionsStore.map(
    (mission) => (
      <Mission key={mission.mission_id} data={mission} />
    ),
  );

  return (
    <Table className="mx-auto">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        {missionList}
      </tbody>
    </Table>
  );
};

export default Missions;
