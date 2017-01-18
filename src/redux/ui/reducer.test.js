import reducer, { initialState } from './reducer'
import {
  TOGGLE_MENU
} from './constants'

describe('UI Reducer', () => {
	it('should return initial state', () => {
		expect(reducer(initialState, { type: 'test' })).toMatchSnapshot();
	});

	it('should return changed toggle status after toggle event', () => {
		expect(reducer(initialState, { type: TOGGLE_MENU })).toMatchSnapshot();
	});
});
