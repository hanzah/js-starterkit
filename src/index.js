import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { Router, applyRouterMiddleware, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import store from 'redux/store'
import routes from 'routes'

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import theme from 'lib/material-ui/theme'
import themeATT from 'brands/default/styles/theme/theme'


import CurrentContext from 'utils/currentContext'
import { getTheme, getLocale, getThemeCss } from 'utils/constants'
import { IntlProvider } from 'react-intl'
import { loadLanguages } from 'utils/localization'

const history = syncHistoryWithStore(browserHistory, store)

const renderedRoutes = routes(store)

const { object } = PropTypes

class Root extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<IntlProvider
					locale={CurrentContext.locale}
					messages={this.props.messages}
				>
					<MuiThemeProvider muiTheme={getMuiTheme(theme, themeATT)}>
						<Router history={history} render={applyRouterMiddleware()} routes={ renderedRoutes }/>
					</MuiThemeProvider>
				</IntlProvider>
			</Provider>
		);
	}
}

Root.propTypes = {
	messages: object
}

CurrentContext.theme = getTheme()
CurrentContext.locale = getLocale()

const cssLink = document.getElementById('brand-css')
cssLink.href = getThemeCss(CurrentContext.theme)

loadLanguages(CurrentContext.theme, CurrentContext.locale).then(({ messages }) => {
	ReactDOM.render(<Root messages={messages}/>, document.getElementById('react-root'));
})
