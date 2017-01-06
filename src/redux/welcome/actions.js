import { createAction } from 'redux-actions'

import {
  CHANGE_MESSAGE
} from './constants'

export const changeMessage = createAction(CHANGE_MESSAGE)
