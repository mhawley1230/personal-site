import React from 'react';
import { shallow } from 'enzyme';
import Header from '../components/Header';

describe('<Header />', () => {
  it('renders without crashing', () => {
    const header = shallow(<Header />);
    expect(header.find('div').length).toEqual(1);
  });
});
