/* global GLOBALS */
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

export default function configureStore(initialState = {}, history) {
	const composeEnhancers = (GLOBALS.FRONT_ENV === 'dev' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
  return createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(thunk, routerMiddleware(history))
  ));
}
