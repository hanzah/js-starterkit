import React from 'react'
import { Route, Redirect, IndexRoute } from 'react-router'
import SimCardsView from 'views/SimCardsView'
import MainLayout from 'layouts/MainLayout'
import SimsIndexView from 'views/SimsIndexView'
import SimDetailsView from 'views/SimDetailsView'
import LoginView from 'views/LoginView'

/* eslint-disable react/display-name */
export default () => (
  <Route>
        <Route path='login' component={LoginView} />
    <Route path='/' component={MainLayout}>

      <Route path="sims">
        <IndexRoute component={SimsIndexView} />
        <Route path=":number" component={SimDetailsView} />
      </Route>
      <IndexRoute component={SimCardsView} />
      <Redirect from='*' to='/' />
    </Route>
  </Route>
)
/* eslint-enable react/display-name */
