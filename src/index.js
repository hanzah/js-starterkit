import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom';
import { Router, applyRouterMiddleware, browserHistory } from 'react-router'
import { IntlProvider } from 'react-intl';
import routes from 'routes'
import ThemeCSSLink from 'utils/ThemeCSSLink'
import CurrentContext from 'utils/currentContext'
import { getTheme, getLocale } from 'utils/constants'
import { loadLanguages } from 'utils/localization'

const renderedRoutes = routes()

const { object } = PropTypes

const Root = ({ messages }) => {
  return (
		<element>
			<ThemeCSSLink theme={CurrentContext.theme} />
				<IntlProvider
					locale={CurrentContext.locale}
					messages={messages}
				>
					<Router history={browserHistory} render={applyRouterMiddleware()} routes={ renderedRoutes }/>
				</IntlProvider>
		</element>
  );
}

Root.propTypes = {
	messages: object
}

CurrentContext.theme = getTheme()
CurrentContext.locale = getLocale()

loadLanguages(CurrentContext.theme, CurrentContext.locale).then(({ messages }) => {
	ReactDOM.render(<Root messages={messages}/>, document.getElementById('react-root'));
})
