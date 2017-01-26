import { handleActions } from 'redux-actions'
import mockSims from './mocks'
import { findIndex } from 'lodash'
import {
  SIMS_SELECTED,
	OPEN_SIM_STATUS_MODAL,
	CLOSE_SIM_STATUS_MODAL,
	TOGGLE_SIM_EDIT_MODAL,
	SIM_UPDATE
} from './constants'

export const initialState = {
  list: mockSims,
	ui: {
		selectedSims: {},
		simStatusModalOpen: false,
		simEditModalOpen: false
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
	[TOGGLE_SIM_EDIT_MODAL]: (state) => {
    return {
			...state,
			ui: {
				...state.ui,
				simEditModalOpen: !state.ui.simEditModalOpen
			}
		}
  },
	[OPEN_SIM_STATUS_MODAL]: (state) => {
		return {
			...state,
			ui: {
				...state.ui,
				simStatusModalOpen: true
			}
		}
	},
	[CLOSE_SIM_STATUS_MODAL]: (state) => {
		return {
			...state,
			ui: {
				...state.ui,
				simStatusModalOpen: false
			}
		}
	},
	[SIM_UPDATE]: (state, action) => {
		const index = findIndex(state.list, (item) => {
			return item.number === action.payload.sim.number
		})
		return {
			...state,
			list: [
				...state.list.slice(0, index),
				action.payload.sim,
				...state.list.slice(index + 1)
			]
		}
	}
}, initialState)
