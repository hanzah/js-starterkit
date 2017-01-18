import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { reducer as form } from 'redux-form'
import welcome from 'redux/welcome/reducer'
import sims from 'redux/sims/reducer'
import ui from 'redux/ui/reducer'


export default combineReducers({
	ui,
  welcome,
	sims,
  form,
  routing
})
