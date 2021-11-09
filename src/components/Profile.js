import React from 'react';
import { useSelector } from 'react-redux';
import '../App.css';


const Profile = () => {

  const rocketlist = useSelector((data) => data.rocketsReducer);

  const rocketItem = rocketlist.filter((item) => item.reserved).map((item) => {
    return(
        <div className ="profile">
        <p>{item.rocket_name}</p>
        </div>
    );
  })
  return(
    <div>
      <h3>My Rockets</h3>
        {rocketItem} 
    </div>
  );
}

export default Profile;
