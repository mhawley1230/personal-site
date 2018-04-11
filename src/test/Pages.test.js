import React from 'react';
import { shallow } from 'enzyme';
import Home from '../components/pages/Home.js';

describe('<Home />', () => {
  it('renders without crashing', () => {
    const home = shallow(<Home />);
    expect(home.find('.home-div').exists()).toEqual(true);
  });
});
