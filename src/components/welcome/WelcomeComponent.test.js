import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import WelcomeComponent from './index'

describe('Welcome (Snapshot)', () => {
  it('Welcome renders hello world', () => {
    const component = renderer.create(<WelcomeComponent />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

	it('Welcome renders hello world with Enzyme', () => {
		const welcome = shallow(<WelcomeComponent />);
    expect(welcome.find('div').text()).toBe('Hello world');
  });
});
