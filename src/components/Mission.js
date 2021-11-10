import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { joinMission, leaveMission } from '../redux/missions/missions';

export default function Mission({ data }) {
  const dispatch = useDispatch();

  const missionClick = (id, status = false) => {
    if (status === false) {
      dispatch(joinMission(id));
    } else {
      dispatch(leaveMission(id));
    }
  };

  return (
    <tr>
      <th>
        {data.mission_name}
      </th>
      <th>
        {data.description}
      </th>
      <th>
        <Button onClick={() => missionClick(data.mission_id, data.status)} />
        {data.status}
      </th>
    </tr>
  );
}

Mission.propTypes = {
  data: PropTypes.shape({
    mission_id: PropTypes.string,
    mission_name: PropTypes.string,
    description: PropTypes.string,
    status: PropTypes.bool,
  }).isRequired,
};
