import reducer, { initialState } from './reducer'
import {
  CHANGE_MESSAGE,
	TOGGLE_SIM_STATUS_MODAL
} from './constants'

describe('Welcome Reducer', () => {
	it('should return initial state', () => {
		expect(reducer(initialState, { type: 'test' })).toMatchSnapshot();
	});

	it('should return changed state', () => {
		expect(reducer(initialState, { type: CHANGE_MESSAGE })).toMatchSnapshot();
	});

	it('should return changed sim status modal state after toggle event', () => {
		expect(reducer(initialState, { type: TOGGLE_SIM_STATUS_MODAL })).toMatchSnapshot();
	});
});
