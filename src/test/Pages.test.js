import React from 'react';
import { shallow } from 'enzyme';
import Home from '../components/pages/Home.js';

describe('<Home />', () => {
  it('renders without crashing', () => {
    const home = shallow(<Home />);
    expect(home.equals(<div className="home-div">This is your home.</div>)).to.equal(true);
  });
});
