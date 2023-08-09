import React from 'react';
import { useParams } from 'react-router-dom';

const CityInfo = () => {
  const { cityId } = useParams();

  return (
    <div>
      <h1>Інформація про ваше місто (ID: {cityId})</h1>
      {}
    </div>
  );
};

export default CityInfo;