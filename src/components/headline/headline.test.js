import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index';
import { findByTestAttr } from '../../../utils';

const setUp = (props={}) => {
  const component = shallow(<Headline {...props} />);
  return component;
} 

describe('Headline Component', () => {

  describe('Have props', () => {
    
    let wrapper;

    beforeEach(() => {
      const props = {
        heading: 'Test heading',
        desc: 'Test description'
      };
      wrapper = setUp(props); 
    });

  });

  describe('Have NO props', () => {
    
  })

})

