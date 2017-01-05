import React from 'react'
import { Route, Redirect, IndexRoute } from 'react-router'
import SimCardsView from 'views/SimCardsView'
import SimCardLayout from 'views/SimCardLayout'
import SimsOverviewView from 'views/SimsOverviewView'

/* eslint-disable react/display-name */
export default () => (
    <Route path='/' component={SimCardLayout}>
      <IndexRoute component={SimCardsView} />
    <Route path="/sims" component={SimsOverviewView} />
      <Redirect from='*' to='/' />
    </Route>
)
/* eslint-enable react/display-name */
