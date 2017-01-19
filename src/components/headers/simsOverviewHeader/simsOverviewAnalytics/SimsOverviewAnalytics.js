import React from 'react';
import CurrentContext from 'utils/currentContext';
import ImageSelector from 'utils/imageSelector';

import styles from 'components/headers/shared/Analytics.scss';

const status = ImageSelector(CurrentContext.theme, 'sim-inventory-status-chart.png');
const inventory = ImageSelector(CurrentContext.theme, 'sim-inventory-by-carrier.png');
const country = ImageSelector(CurrentContext.theme, 'sim-inventory-by-country.png');

const SimsOverviewAnalytics = () => {
  return (
    <div className={styles.chart_wrapper}>
    <div className={styles.charts} style={{ width: '30%' }}>
      <div className={styles.chart_images}><img src={status} alt="Status" /></div>
      <div className={styles.chart_names}>Inventory by Status</div>
    </div>
    <div className={styles.charts} style={{ width: '35%' }}>
      <div className={styles.chart_images}><img src={inventory} alt="Inventory" /></div>
      <div className={styles.chart_names}>Inventory by Carrier</div>
    </div>
    <div className={styles.charts} style={{ width: '35%' }}>
      <div className={styles.chart_images}><img src={country} alt="Country" /></div>
      <div className={styles.chart_names}>Inventory by Country</div>
    </div>
    </div>
  );
}

export default SimsOverviewAnalytics;
