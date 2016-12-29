import React from 'react'
import { Route, Redirect } from 'react-router'
import SimCardsView from '../views/SimCardsView'

/* eslint-disable react/display-name */
export default () => (
  <Route>
		<Route path='/' component={SimCardsView} />
		<Redirect from='*' to='/' />
  </Route>
)
/* eslint-enable react/display-name */
