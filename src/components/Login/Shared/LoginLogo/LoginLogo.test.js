import React from 'react';
import { shallow } from 'enzyme';

import LoginLogo from './LoginLogo';

describe('<LoginLogo/>', () => {

  it('should render a component', () => {
    const wrapper = shallow(<LoginLogo />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have Logo component', () => {
    const wrapper = shallow(<LoginLogo />);
    const Logo = wrapper.find('Logo');
    expect(Logo).toBeDefined();
  });

  it('has prop', () => {
    const wrapper = shallow(<LoginLogo />);
		expect(wrapper.props().productName).toBeUndefined();
	});
});
