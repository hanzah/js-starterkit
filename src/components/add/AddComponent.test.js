import React from 'react';
import { mount } from 'enzyme';
import AddComponent from './index'

describe('Add', () => {
  let add;
  let onAdd;

  beforeEach(() => {
    onAdd = jest.fn();
    add = mount(<AddComponent onAdd={onAdd} />);
  });

	it('Add requires onAdd prop', () => {
		expect(add.props().onAdd).toBeDefined();
	});

	it('Add renders button', () => {
		const button = add.find('button').first();
		expect(button).toBeDefined();
	});

	it('Button click calls onAdd', () => {
		const button = add.find('button').first();
		const input = add.find('input').first();
		input.simulate('change', { target: { value: 'Name 4' } });
		button.simulate('click');
		expect(onAdd).toBeCalledWith('Name 4');
	});

});
