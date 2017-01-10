import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom';
import { Router, applyRouterMiddleware, browserHistory } from 'react-router'
import { IntlProvider } from 'react-intl';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import theme from 'lib/material-ui/theme'
import routes from 'routes'
import CurrentContext from 'utils/currentContext'
import { getTheme, getLocale, getThemeCss } from 'utils/constants'
import { loadLanguages } from 'utils/localization'

const renderedRoutes = routes()

const { object } = PropTypes

const Root = ({ messages }) => {
  return (
		<element>
			<IntlProvider
				locale={CurrentContext.locale}
				messages={messages}
			>
				<MuiThemeProvider muiTheme={getMuiTheme(theme)}>
					<Router history={browserHistory} render={applyRouterMiddleware()} routes={ renderedRoutes }/>
				</MuiThemeProvider>
			</IntlProvider>
		</element>
  );
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
