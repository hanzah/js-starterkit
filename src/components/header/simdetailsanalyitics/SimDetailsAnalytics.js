import React from 'react';
import CurrentContext from 'utils/currentContext';
import ImageSelector from 'utils/ImageSelector';

import styles from '../Desktop/Header.scss';

const usage = ImageSelector(CurrentContext.theme, 'sim-detail-usage.png');
const country = ImageSelector(CurrentContext.theme, 'sim-detail-country-and-carrier.png');

const SimsOverviewAnalytics = () => {
  return (
    <div>
    <div className={styles.charts} style={{ width: '65%' }}>
      <div className={styles.chart_images}><img src={usage} alt="Sim Usage" /></div>
      <div className={styles.chart_names}>Sim Usage</div>
    </div>
    <div className={styles.charts} style={{ width: '35%' }}>
      <div className={styles.chart_images}><img src={country} alt="Country and Carrier" /></div>
      <div className={styles.chart_names}>Country and Carrier</div>
    </div>
    </div>
  );
}

export default SimsOverviewAnalytics;