import React from 'react';

const Cards = ({ name, number, date, time }) => {
  return (
    <div>
      <h2>{name}</h2>
      <h3>Number of guests: {number}</h3>
      <h3>Date: {date}</h3>
      <h3>Time: {time}</h3>
    </div>
  )

}

export default Cards;