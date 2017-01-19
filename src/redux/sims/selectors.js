import { find } from 'lodash'

export const getSims = (state) => {
  return state.list
}

export const getSim = (state, number) => {
  return find(state.list, {number})
}

export const getSelectedSims = (state) => {
  return state.ui.selectedSims
}
