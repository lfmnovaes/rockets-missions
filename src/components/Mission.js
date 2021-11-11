import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Badge } from 'react-bootstrap';
import { joinMission, leaveMission } from '../redux/missions/missions';

export default function Mission({ data }) {
  const dispatch = useDispatch();

  const missionClick = (id, reserved) => {
    if (reserved === false) {
      dispatch(joinMission(id));
    } else {
      dispatch(leaveMission(id));
    }
  };

  return (
    <tr>
      <th className="mission-name">
        {data.mission_name}
      </th>
      <th className="mission-description">
        {data.description}
      </th>
      <th className="align-middle">
        {data.reserved ? (
          <Badge bg="success">Active Member</Badge>
        ) : (
          <Badge bg="secondary">NOT A MEMBER</Badge>
        )}
      </th>
      <th className="align-middle">
        {data.reserved ? (
          <Button variant="outline-danger" onClick={() => missionClick(data.mission_id, data.reserved)}>Leave Mission</Button>
        ) : (
          <Button variant="outline-primary" onClick={() => missionClick(data.mission_id, data.reserved)}>Join Mission</Button>
        )}
      </th>
    </tr>
  );
}

Mission.propTypes = {
  data: PropTypes.shape({
    mission_id: PropTypes.string,
    mission_name: PropTypes.string,
    description: PropTypes.string,
    reserved: PropTypes.bool,
  }).isRequired,
};
