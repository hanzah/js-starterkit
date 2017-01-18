import React, {Component} from 'react';
import {Table, TableBody, TableRow, TableRowColumn} from 'material-ui/Table';
import cn from 'classnames';

import styles from './SimDetailsInfo.scss';

class SimDetailsInfo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showCheckboxes: false,
      selectable: false,
      showDetails: false
    };
  }

  handleShowDetails = () => {
    this.setState({
      showDetails: !this.state.showDetails
    });
  }

  handleViewMoreText = () => {

    if (!this.state.showDetails) {
      return false;
    } else {
      return true;
    }

  }

  render() {

    return (
      <div
        className={cn(styles.siminfo_wrap, this.state.showDetails
        ? styles.show
        : '')}>
        <h2 className={styles.table_title}>SIM DATA</h2>
        <div className={styles.table_wrap_top}>
          <Table selectable={this.state.selectable}>
            {this.renderSimData()}
          </Table>
        </div>
        <h2 className={cn(styles.table_title, styles.current_session)}>CURRENT SESSION</h2>
        <div className={styles.table_wrap_bottom}>
          <Table selectable={this.state.selectable}>
            <TableBody displayRowCheckbox={this.state.showCheckboxes}>
              <TableRow>
                <TableRowColumn>
                  <div className={styles.label}>CARRIER</div>
                  <div className={styles.label_detail}>AT&amp;T</div>
                </TableRowColumn>
                <TableRowColumn>
                  <div className={styles.label}>LOCATION</div>
                  <div className={styles.label_detail}>United States</div>
                </TableRowColumn>
                <TableRowColumn>
                  <div className={styles.label}>SESSION START</div>
                  <div className={styles.label_detail}>4.4.2016. | 03:42 PM</div>
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  <div className={styles.label}>DEVICE IP ADDRESS</div>
                  <div className={styles.label_detail}>10.192.0.40</div>
                </TableRowColumn>
                <TableRowColumn>
                  <div className={styles.label}>GGSN/PGW ADDRES</div>
                  <div className={styles.label_detail}>10.22.110.13</div>
                </TableRowColumn>
                <TableRowColumn>
                  <div className={styles.label}>APN</div>
                  <div className={styles.label_detail}>testm2m-dc8</div>
                </TableRowColumn>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        {this.handleViewMoreText()
          ? <a href="javascript:void(0)" className={styles.view_table_info} onClick={this.handleShowDetails} title="View less">View less</a>
          : <a className={styles.view_table_info} href="javascript:void(0)" onClick={this.handleShowDetails}
            title="View details">View details</a>
        }
      </div>
    );
  }

  renderSimData() {
    return (
      <TableBody displayRowCheckbox={this.state.showCheckboxes}>
        <TableRow>
          <TableRowColumn>
            <div className={styles.label}>MSISDN NUMBER</div>
            <div className={styles.label_detail}>+1 212 439 6500</div>
          </TableRowColumn>
          <TableRowColumn>
            <div className={styles.label}>SIM STATUS</div>
            <div className={styles.label_detail}>Activated</div>
          </TableRowColumn>
          <TableRowColumn>
            <div className={styles.label}>ACTIVATION DATE</div>
            <div className={styles.label_detail}>11.3.2016</div>
          </TableRowColumn>
        </TableRow>

        <TableRow>
          <TableRowColumn>
            <div className={styles.label}>PRIMARY IMS</div>
            <div className={styles.label_detail}>310170230326675</div>
          </TableRowColumn>
          <TableRowColumn>
            <div className={styles.label}>IMEI</div>
            <div className={styles.label_detail}>310170230326675</div>
          </TableRowColumn>
          <TableRowColumn>
            <div className={styles.label}>POLICY</div>
            <div className={styles.label_detail}>310170230326675</div>
          </TableRowColumn>
        </TableRow>

        <TableRow>
          <TableRowColumn>
            <div className={styles.label}>LINE PAYMENT STATUS</div>
            <div className={styles.label_detail}>Current</div>
          </TableRowColumn>
          <TableRowColumn>
            <div className={styles.label}>COMMUNICATION PLAN</div>
            <div className={styles.label_detail}>AT&T IoT Communication Plan Name</div>
          </TableRowColumn>
          <TableRowColumn>
            <div className={styles.label}>RATE PLAN</div>
            <div className={styles.label_detail}>AT&T IoT Data Plan Name</div>
          </TableRowColumn>
        </TableRow>

        <TableRow>
          <TableRowColumn>
            <div className={styles.label}>COPY RULE<br />(SECURE SIM ID)</div>
            <div className={styles.label_detail}>None</div>
          </TableRowColumn>
          <TableRowColumn>
            <div className={styles.label}>COPY RULE<br />(PASSWORD)</div>
            <div className={styles.label_detail}>None</div>
          </TableRowColumn>
          <TableRowColumn>
            <div className={styles.label}>CUSTOMER</div>
            <div className={styles.label_detail}>Customer Name</div>
          </TableRowColumn>
        </TableRow>
      </TableBody>
    );
  }
}

export default SimDetailsInfo;