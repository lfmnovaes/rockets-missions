import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getRockets,
  AddReserve,
  CancelReserve,
} from '../redux/rockets/rockets';
import '../App.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const rocketList = useSelector((data) => data.rocketsReducer);

  useEffect(() => {
    if (rocketList.length === 0) {
      dispatch(getRockets());
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const ReserveHandler = (id) => {
    dispatch(AddReserve(id));
  };

  const CancelReserveHandler = (id) => {
    dispatch(CancelReserve(id));
  };

  const rocketItem = rocketList.map((item) => (
    <div key={item.id} className="rocket-row">
      <img src={item.flickr_images[0]} alt={item.rocket_name} />
      <div className="rocket-detail">
        <h3>{item.rocket_name}</h3>
        <div className="description">
          {item.reserved ? <span>Reserved</span> : null}
          <p>{item.description}</p>
        </div>
        {item.reserved ? (
          <button
            type="submit"
            onClick={() => CancelReserveHandler(item.id)}
            className="cancelButton"
          >
            Cancel Reservation
          </button>
        ) : (
          <button
            type="submit"
            onClick={() => ReserveHandler(item.id)}
            className="reserveButton"
          >
            Reserve Rocket
          </button>
        )}
      </div>
    </div>
  ));
  return <div className="rockets-list">{rocketItem}</div>;
};

export default Rockets;
