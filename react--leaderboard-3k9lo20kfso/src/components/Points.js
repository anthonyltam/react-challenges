import React from 'react';

const Points = ({handlePoints}) => (
  <button onClick={handlePoints} className="btn btn-primary points" name="points">Points</button>
);

export default Points;
