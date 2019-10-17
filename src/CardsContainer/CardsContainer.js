import React from 'react';
import Cards from '../Cards/Cards'

const CardsContainer = ({ reservations }) => {
  const cards = reservations.map(reservation => {
    return <Cards 
      key={reservation.id}
      name={reservation.name}
      number={reservation.number}
      date={reservation.date}
      time={reservation.time}
    />
  })

  return (
    <div>
      {cards}
    </div>
  )

}

export default CardsContainer;