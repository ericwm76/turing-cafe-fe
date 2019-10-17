import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      guests: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  updateState = (e) => {
    e.preventDefault();
    if (this.state.name && this.state.date && this.state.time && this.state.guests) {
      this.props.createNewReservation(this.state.name, this.state.date, this.state.time, this.state.guests)
    }
  }

  render() {
    return (
      <div>
        <input className='name-input' name='name' value={this.state.name} type='text' placeholder='Name' onChange={this.handleChange}/>
        <input className='date-input' name='date' value={this.state.date} type='date' placeholder='Date' onChange={this.handleChange}/>
        <input className='time-input' name='time' value={this.state.time} type='text' placeholder='Time' onChange={this.handleChange}/>
        <input className='guests-input' name='guests' value={this.state.guests} type='number' placeholder='Number of guests' onChange={this.handleChange}/>
        <button onClick={this.updateState}>Make reservation</button>
      </div>
    )
  }
}

export default Form;