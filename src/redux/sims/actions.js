import { createAction } from 'redux-actions'

import {
  SIMS_SELECTED
} from './constants'

const simsSelect = createAction(SIMS_SELECTED)

export const simsSelected = (sims) => (dispatch) => {
	let selectedSims = sims.reduce((o, value) => {
		o[value.number] = value
		return o
	}, {})
	dispatch(simsSelect(selectedSims))
}
