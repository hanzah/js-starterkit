import reducer, { initialState } from './reducer'
import {
  SIM_UPDATE,
	OPEN_SIM_STATUS_MODAL,
	CLOSE_SIM_STATUS_MODAL,
	TOGGLE_SIM_EDIT_MODAL
} from './constants'

describe('Welcome Reducer', () => {
	it('should return initial state', () => {
		expect(reducer(initialState, { type: 'test' })).toMatchSnapshot();
	});

	it('should return open sim status modal state after open event', () => {
		expect(reducer(initialState, { type: OPEN_SIM_STATUS_MODAL })).toMatchSnapshot();
	});

	it('should return close sim status modal state after open event', () => {
		expect(reducer(initialState, { type: CLOSE_SIM_STATUS_MODAL })).toMatchSnapshot();
	});

	it('should return changed sim edit modal state after toggle event', () => {
		expect(reducer(initialState, { type: TOGGLE_SIM_EDIT_MODAL })).toMatchSnapshot();
	});

	it('should return changed sim data', () => {
		expect(reducer(initialState, { type: SIM_UPDATE, payload: { sim: {number: initialState.list[0].number,
																																status: 'DEACTIVATED'}}})).toMatchSnapshot();
	});

	it('should return changed sim scheduleData', () => {
		expect(reducer(initialState, { type: SIM_UPDATE, payload: { sim: {number: initialState.list[0].number,
																																scheduleData: {date: new Date(12345678)}}}})).toMatchSnapshot();
	});
});
