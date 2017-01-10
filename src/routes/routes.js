import React from 'react'
import { Route, Redirect, IndexRoute } from 'react-router'
import SimCardsView from 'views/SimCardsView'
import MainLayout from 'layouts/MainLayout'
import SimsLayout from 'layouts/SimsLayout'
import SimsIndexView from 'views/SimsIndexView'

/* eslint-disable react/display-name */
export default () => (
    <Route path='/' component={MainLayout}>
			<Route path="sims" component={SimsLayout} >
				<IndexRoute component={SimsIndexView} />
			</Route>
			<IndexRoute component={SimCardsView} />
      <Redirect from='*' to='/' />
    </Route>
)
/* eslint-enable react/display-name */
