import React from 'react';
import { shallow } from 'enzyme'
import Form from './Form';

describe('Form', () => {
  let wrapper, mockEvent;
  let createNewReservation = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Form createNewReservation={createNewReservation} />);
    mockEvent = {
      preventDefault: jest.fn(),
      target: {
        name: 'name',
        value: 'MK'
      }
    }
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should call handleChange on change in the input field', () => {
    wrapper.instance().handleChange = jest.fn();
    wrapper.find('input').at(0).simulate('change', mockEvent);
    expect(wrapper.instance().handleChange).toHaveBeenCalled();
  })

  it('should update state when handleChange is called', () => {
    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state('name')).toEqual('MK')
  });

  it('should call updateState when Make Reservation button is clicked', () => {
    wrapper.instance().updateState = jest.fn();
    wrapper.setState({
      name: 'Hey',
      date: 'Today',
      time: 'Now',
      guests: '30'
    });

    wrapper.find('button').simulate('click');
    expect(wrapper.instance().updateState).toHaveBeenCalled()
  })

  it('should call createNewReservation when updateState is called', () => {
    wrapper.setState({
      name: 'Hey',
      date: 'Today',
      time: 'Now',
      guests: '30'
    });

    wrapper.instance().updateState(mockEvent);
    expect(createNewReservation).toHaveBeenCalled();


  })

})