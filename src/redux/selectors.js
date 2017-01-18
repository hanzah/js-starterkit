import * as simSelectors from 'redux/sims/selectors'
import * as uiSelectors from 'redux/ui/selectors'

export const getSims = (state) => { return simSelectors.getSims(state.sims) }
export const getSim = (state, number) => { return simSelectors.getSim(state.sims, number) }
export const getSelectedSims = (state) => { return simSelectors.getSelectedSims(state.sims) }
export const getMenuToggleStatus = (state) => { return uiSelectors.getMenuToggleStatus(state.ui) }
