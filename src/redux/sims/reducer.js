import { handleActions } from 'redux-actions'
import mockSims from './mocks'
import {
  SIMS_SELECTED
} from './constants'

export const initialState = {
  list: mockSims,
	ui: {
		selectedSims: {}
	}
}

export default handleActions({
  [SIMS_SELECTED]: (state, action) => {
    return {
			...state,
			ui: {
				...state.ui,
				selectedSims: action.payload
			}
		}
  }
}, initialState)
