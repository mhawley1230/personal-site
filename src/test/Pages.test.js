import React from 'react';
import { shallow } from 'enzyme';
import Home from '../components/pages/Home.js';

const home = shallow(<Home />);

describe('<Home />', () => {
  it('renders without crashing', () => {
    expect(home.find('.home-div').exists()).toEqual(true);
  });

  it('allows a user to navigate the pages', () => {
    home.find('a').forEach((node) => {
      expect(node.exists()).toEqual(true);
      node.simulate('click');
      expect(node.name()).to.equal(node);
    });
  });
});
