import * as simSelectors from 'redux/sims/selectors'

export const getSims = (state) => { return simSelectors.getSims(state.sims) }
export const getSelectedSims = (state) => { return simSelectors.getSelectedSims(state.sims) }
