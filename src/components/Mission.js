import React from 'react';
import PropTypes from 'prop-types';

export default function Mission({ data }) {
  return (
    <tr>
      <th>
        {data.mission_name}
      </th>
      <th>
        {data.mission_id}
      </th>
      <th>
        {data.description}
      </th>
    </tr>
  );
}

Mission.propTypes = {
  data: PropTypes.shape({
    mission_name: PropTypes.string,
    mission_id: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};
