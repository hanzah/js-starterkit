import { createAction } from 'redux-actions'
import * as Selectors from 'redux/selectors'
import * as SimService from 'services/SimService'

import {
  SIMS_SELECTED,
	OPEN_SIM_STATUS_MODAL,
	CLOSE_SIM_STATUS_MODAL,
	TOGGLE_SIM_EDIT_MODAL,
	SIM_UPDATE
} from './constants'

const simsSelect = createAction(SIMS_SELECTED)
export const openSimStatusModal = createAction(OPEN_SIM_STATUS_MODAL)
export const closeSimStatusModal = createAction(CLOSE_SIM_STATUS_MODAL)
export const toggleSimEditModal = createAction(TOGGLE_SIM_EDIT_MODAL)
export const simUpdated = createAction(SIM_UPDATE)

export const simsSelected = (sims) => (dispatch) => {
	let selectedSims = sims.reduce((o, value) => {
		o[value.number] = value
		return o
	}, {})
	return dispatch(simsSelect(selectedSims))
}

export const simUpdate = (id, data) => async (dispatch, getState) => {
	//ToDo: Cleanup once real service in place
	SimService.patch(Selectors.getSim(getState(), id), {scheduleData: data.scheduleData}).then((sim) => {
		dispatch(simUpdated({sim}))
		setTimeout(() => {
			SimService.patch(Selectors.getSim(getState(), id), {status: data.status, scheduleData: null}).then((sim) => {
				return dispatch(simUpdated({sim}))
			});
		}, 10000)
	})
}
