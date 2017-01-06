import { handleActions } from 'redux-actions'

import {
  CHANGE_MESSAGE
} from './constants'

export const initialState = {
  message: 'Initial message'
}

export default handleActions({
  [CHANGE_MESSAGE]: (state) => {
    return {
			...state,
			message: 'Message Changed'
		}
  }
}, initialState)
