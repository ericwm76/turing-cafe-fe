import React, { Component } from 'react';
import './Form.css';


class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  updateState = () => {
    e.preventDefault();

  }

  render() {
    return (
      <div>
        <input name='name' value={this.state.name} type='text' placeholder='Name' onChange={this.handleChange}/>
        <input name='date' value={this.state.date} type='text' placeholder='Date' onChange={this.handleChange}/>
        <input name='time' value={this.state.time} type='text' placeholder='Time' onChange={this.handleChange}/>
        <input name='guests' value={this.state.number} type='number' placeholder='Number of guests' onChange={this.handleChange}/>
        <button>Make reservation</button>
      </div>
    )
  }
}

export default Form;