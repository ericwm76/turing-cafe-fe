import React, { Component } from 'react';
import './Form.css';


class Form extends Component {
  constructor() {
    super()
  }

  render() {

    return (
      <div>
        <input name='name' type='text' placeholder='Name'/>
        <input name='date' type='text' placeholder='Date'/>
        <input name='time' type='text' placeholder='Time'/>
        <input name='guests' type='number' placeholder='Number of guests'/>
        <button>Make reservation</button>
      </div>
    )
  }
}

export default Form;