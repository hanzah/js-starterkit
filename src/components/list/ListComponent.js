import React, { PropTypes } from 'react'

const { array } = PropTypes

List.propTypes = {
	data: array
}

const List = ({ data }) => {
	return (
    <table className="myClass">
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        { data.map((item, index) => (
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



export default List
