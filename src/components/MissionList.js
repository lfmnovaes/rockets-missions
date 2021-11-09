import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getMissions } from '../redux/missions/missions';

const Missions = () => {
  const dispatch = useDispatch();
  // const missionList = useSelector((store) => store.missionsReducer);

  useEffect(() => {
    dispatch(getMissions());
  }, []);

  return (
    <h1>Missions</h1>
  );
};

export default Missions;
