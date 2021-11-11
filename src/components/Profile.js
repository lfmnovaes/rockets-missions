import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default function Profile() {
  const missionsStore = useSelector((store) => store.missionsReducer);
  const reservedMissions = missionsStore.filter((mission) => mission.reserved === true);

  return (
    <Container className="d-flex justify-content-evenly">
      <ListGroup>
        <h2>My Rockets</h2>
      </ListGroup>
      <ListGroup>
        <h2>My missions</h2>
        {reservedMissions.map((mission) => (
          <ListGroup.Item key={mission.mission_id}>{mission.mission_name}</ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}
