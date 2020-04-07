import React from 'react';
import Card from './Card';
import testData from './testData';

const CardList = (props) => (
  <div>
    {testData.map((profile) => (
      <Card {...profile} />
    ))}
  </div>
);

export default CardList;
