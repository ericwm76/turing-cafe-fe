import React, { Component } from 'react';
import './App.css';
import { getReservations } from '../apiCalls'
import CardsContainer from '../CardsContainer/CardsContainer'

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

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <CardsContainer reservations={this.state.reservations} />
        </div>
      </div>
    )
  }
}

export default App;
