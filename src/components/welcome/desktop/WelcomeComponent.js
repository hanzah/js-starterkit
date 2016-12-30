import React, { PropTypes } from 'react'
import { FormattedMessage, FormattedNumber } from 'react-intl';
import cn from 'classnames'

import styles from './WelcomeComponent.scss'

const { string } = PropTypes

export default class Welcome extends React.Component {
  render() {
    return (
      <div className={cn(styles.wrapper, styles.color)}>
				<FormattedMessage
					id="HELLO"
					defaultMessage="Halo, {name}"
					values={{
						name: this.props.name
					}}
				/>
				<p>
          <FormattedNumber value={123456.789} />
        </p>
			</div>
    );
  }
}

Welcome.propTypes = {
  name: string
}
