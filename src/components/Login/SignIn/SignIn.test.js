import React from 'react';
import { mount, shallow } from 'enzyme';

import SignIn from './SignIn';

describe('<SignIn/>', () => {

  it('should render a component', () => {
    const wrapper = shallow(<SignIn />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have Login component', () => {
    const wrapper = shallow(<SignIn />);
    const Login = wrapper.find('Login');
    expect(Login).toBeDefined();
  });

});