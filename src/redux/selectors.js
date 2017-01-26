import * as simsSelectors from 'redux/sims/selectors'
import * as uiSelectors from 'redux/ui/selectors'

export const getSims = (state) => { return simsSelectors.getSims(state.sims) }
export const getSim = (state, number) => { return simsSelectors.getSim(state.sims, number) }
export const getSelectedSims = (state) => { return simsSelectors.getSelectedSims(state.sims) }
export const getSimStatusModalStatus = (state) => { return simsSelectors.getSimStatusModalStatus(state.sims) }
export const getSimEditModalStatus = (state) => { return simsSelectors.getSimEditModalStatus(state.sims) }
export const getMenuToggleStatus = (state) => { return uiSelectors.getMenuToggleStatus(state.ui) }
