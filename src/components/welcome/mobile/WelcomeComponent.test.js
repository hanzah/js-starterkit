import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import WelcomeComponent from './WelcomeComponent'

describe('Welcome (Snapshot)', () => {
  it('Welcome renders hello world', () => {
    const component = renderer.create(<WelcomeComponent name="world"/>);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

	it('Welcome renders hello world with Enzyme', () => {
		const welcome = shallow(<WelcomeComponent name="world"/>);
    expect(welcome.find('div').text()).toBe('Hello world');
  });
});
