import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';
import { findByTestAttr } from '../../../utils';


const setUp = (props={}) => {
  const componentWhole = shallow(<Header {...props} />);
  return componentWhole;
}


describe('Header component', () => {

  let component;
  beforeEach(() => {
    component = setUp();
  })
  
  it('Should render without errors', () => {
    console.log(component.debug());
    const wrapper = findByTestAttr(component, 'header-component');
    expect(wrapper.length).toBe(1);
  });

  it('Should render logo', () => {
    const logo = findByTestAttr(component, 'logo-img');
    expect(logo.length).toBe(1);
  });
}); 