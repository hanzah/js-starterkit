import React from 'react';
import { mount, shallow } from 'enzyme';

import Login from './Login';

describe('<Login/>', () => {
  it('should render a component', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper).toMatchSnapshot();
  });
});