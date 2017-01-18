import { handleActions } from 'redux-actions'

import {
  TOGGLE_MENU
} from './constants'

export const initialState = {
  menuOpened: true
}

export default handleActions({
  [TOGGLE_MENU]: (state) => {
    return {
			...state,
			menuOpened: !state.menuOpened
		}
  }
}, initialState)
