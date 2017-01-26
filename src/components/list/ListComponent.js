import React, { PropTypes } from 'react'

const { array } = PropTypes

export default class List extends React.Component {
	render() {
		return (
			<table className="myClass">
				<thead>
					<tr>
						<th>Name</th>
					</tr>
				</thead>
				<tbody>
					{ this.props.data.map((item, index) => (
						<tr key={index}>
							<td>
								{item}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		)
	}
}

List.propTypes = {
	data: array
}
