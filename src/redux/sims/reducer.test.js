import reducer, { initialState } from './reducer'
import {
  CHANGE_MESSAGE
} from './constants'

describe('Welcome Reducer', () => {
	it('should return initial state', () => {
		expect(reducer(initialState, { type: 'test' })).toMatchSnapshot();
	});

	it('should return changed state', () => {
		expect(reducer(initialState, { type: CHANGE_MESSAGE })).toMatchSnapshot();
	});
});
