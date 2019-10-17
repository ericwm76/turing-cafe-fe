import React from 'react';
import { shallow } from 'enzyme'
import App from './App';


describe('App', () => {
  it('should match the snapshot', () => {
    let wrapper = shallow(<App />);

    expect(wrapper).toMatchSnapshot();
  })

  it('updates state when createNewReservation is called', () => {
    let wrapper = shallow(<App />);

    wrapper.instance().createNewReservation('Bill', '10/20/30', '2:30', 45);

    expect(wrapper.state('reservations')[0]).toEqual({ name: 'Bill', date: '10/20/30', time: '2:30', guests: 45 })
  })
});
