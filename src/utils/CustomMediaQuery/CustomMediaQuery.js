import React, { PropTypes } from 'react'
import MediaQuery from 'react-responsive'

const { object } = PropTypes

const customMediaQueryWrapper = (min, max) => {
	class CustomMediaQuery extends React.Component {
		render(){
			return (
				<MediaQuery maxWidth={max} minWidth={min}>
					{this.props.children}
				</MediaQuery>
			)
		}
	}
	CustomMediaQuery.propTypes = {
		children: object
	}
	return CustomMediaQuery
}

export default customMediaQueryWrapper
