import React, { Component } from 'react';
import './App.css';
import { getReservations, postReservation } from '../apiCalls'
import CardsContainer from '../CardsContainer/CardsContainer'
import Form from '../Form/Form'

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    };
  };

  componentDidMount() {
    getReservations()
    .then(data => {
      this.setState({ reservations: data });
      console.log('reservations--->', this.state.reservations)
    });
  }

  createNewReservation = (name, date, time, guests) => {
    const newReservation = { name: name, date: date, time: time, number: guests }
    this.setState({ 
      reservations: [...this.state.reservations, newReservation]
    });
    postReservation(newReservation);
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form createNewReservation={this.createNewReservation}/>
        </div>
        <div className='resy-container'>
          <CardsContainer reservations={this.state.reservations} />
        </div>
      </div>
    )
  }
}

export default App;