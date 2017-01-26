import React, { Component } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import Sessions from './SessionsTab';
import Changes from './ChangesTab';
import EndUser from './EndUserTab';
import Diagnostics from './DiagnosticsTab';

import styles from './SimDetailsTabs.scss';

class SimDetailsTabs extends Component {

  render() {
    return (
      <div className={styles.tabs_container}>
        <Tabs >
          <Tab label="Sessions" className={styles.tab}>
            <div>
              <Sessions />
            </div>
          </Tab>
          <Tab label="Changes" className={styles.tab}>
            <div>
              <Changes />
            </div>
          </Tab>
          <Tab label="End User" className={styles.tab}>
            <div>
              <EndUser />
            </div>
          </Tab>
          <Tab label="Diagnostics" className={styles.tab}>
            <div>
              <Diagnostics />
            </div>
          </Tab>
          <Tab label="Lifecycle" className={styles.tab}>
            <div>
              Lifecycle
              </div>
          </Tab>
          <Tab label="Send SMS" className={styles.tab}>
            <div>
              Send SMS
              </div>
          </Tab>
          <Tab label="OTA" className={styles.tab}>
            <div>
              OTA
              </div>
          </Tab>
          <Tab label="Rating" className={styles.tab}>
            <div>
              Rating
              </div>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default SimDetailsTabs;
