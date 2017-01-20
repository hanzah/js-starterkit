import { createAction } from 'redux-actions'

import {
  SIMS_SELECTED,
	TOGGLE_SIM_STATUS_MODAL
} from './constants'

const simsSelect = createAction(SIMS_SELECTED)

export const simsSelected = (sims) => (dispatch) => {
	let selectedSims = sims.reduce((o, value) => {
		o[value.number] = value
		return o
	}, {})
	dispatch(simsSelect(selectedSims))
}

export const toggleSimStatusModal = createAction(TOGGLE_SIM_STATUS_MODAL)
