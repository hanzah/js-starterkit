import React from 'react'
import ReactDOM from 'react-dom';
import { Router, applyRouterMiddleware, browserHistory } from 'react-router'
import routes from 'routes'
import ThemeCSSLink from 'utils/ThemeCSSLink'
import CurrentContext from 'utils/currentContext'
import { getTheme } from 'utils/constants'

class Root extends React.Component {
	constructor(props) {
		super(props)
		CurrentContext.theme = getTheme()
	}

  render() {
    return (
			<element>
				<ThemeCSSLink theme={CurrentContext.theme} />
				<Router history={browserHistory} render={applyRouterMiddleware()}>
					{ routes() }
				</Router>
			</element>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('react-root'));
