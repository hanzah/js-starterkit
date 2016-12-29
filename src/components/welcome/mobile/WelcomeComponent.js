import React, { PropTypes } from 'react'
import cn from 'classnames'

import styles from './WelcomeComponent.scss'

const { string } = PropTypes

export default class Welcome extends React.Component {
  render() {
    return (
      <div className={cn(styles.wrapper, styles.blue)}>Hello {this.props.name}</div>
    );
  }
}

Welcome.propTypes = {
  name: string
}
