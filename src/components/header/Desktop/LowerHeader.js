import React, { Component, PropTypes } from 'react';
//import SimsOverviewAnalytics from '../simsoverviewanalytics';
import SimDetailAnalytics from '../simdetailsanalyitics';
import cn from 'classnames';
import { FormattedMessage } from 'react-intl';

import styles from './Header.scss';

const { string } = PropTypes;

class LowerHeader extends Component {
  render() {
    return (
      <div>
        <SimDetailAnalytics />
      </div>
    );
  }
}

export default LowerHeader;