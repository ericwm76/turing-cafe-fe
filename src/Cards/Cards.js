import React from 'react';
import './Cards.css'

const Cards = ({ name, number, date, time }) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <h3>Guests: {number}</h3>
      <h3>Date: {date}</h3>
      <h3>Time: {time}</h3>
    </div>
  )

}

export default Cards;