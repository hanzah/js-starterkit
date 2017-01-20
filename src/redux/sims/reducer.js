import { handleActions } from 'redux-actions'
import mockSims from './mocks'
import {
  SIMS_SELECTED,
	TOGGLE_SIM_STATUS_MODAL
} from './constants'

export const initialState = {
  list: mockSims,
	ui: {
		selectedSims: {},
		simStatusModalOpen: false
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
  },
	[TOGGLE_SIM_STATUS_MODAL]: (state) => {
    return {
			...state,
			ui: {
				...state.ui,
				simStatusModalOpen: !state.ui.simStatusModalOpen
			}
		}
  }
}, initialState)
