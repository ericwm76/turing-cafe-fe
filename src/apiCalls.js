export const getReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
  .then(r => r.json())
  .then(data => data)
}

export const postReservation = (newReservation) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(newReservation),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  
  return fetch('http://localhost:3001/api/v1/reservations',	    options)
    .then(response => response.json())
    .catch(error => console.log(error));
 }
 