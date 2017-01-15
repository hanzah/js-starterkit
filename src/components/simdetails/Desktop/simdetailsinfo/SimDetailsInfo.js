import React, { Component } from 'react';
import { Table, TableBody, TableRow, TableRowColumn } from 'material-ui/Table';
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
    this.setState({ showDetails: !this.state.showDetails });
  }
  render() {
    var clickText = '';
    if (!this.state.showDetails) {
      clickText = 'View details';
    } else {
      clickText = 'View less';
    }

    return (
      <div className={cn(styles.siminfo_wrap, this.state.showDetails ? styles.show : '')}>

        <div className={styles.table_wrap_top}>

          <Table selectable={this.state.selectable}>
            <TableBody displayRowCheckbox={this.state.showCheckboxes}>

              <TableRow>
                <TableRowColumn>
                  <div className="label">PHONE NUMBER</div>
                  <div className="label_detail">+1 212 439 6500</div>
                </TableRowColumn>
                <TableRowColumn>
                  <div className="label">SIM STATUS</div>
                  <div className="label_detail">Activated</div>
                </TableRowColumn>
                <TableRowColumn>
                  <div className="label">ACTIVATION DATE</div>
                  <div className="label_detail">11.3.2016</div>
                </TableRowColumn>
                <TableRowColumn>
                  <div className="label">IN SESSION</div>
                  <div className="label_detail">YES</div>
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  <div className="label">PRIMARY IMS</div>
                  <div className="label_detail">310170230326675</div>
                </TableRowColumn>
                <TableRowColumn>
                  <div className="label">IMEI</div>
                  <div className="label_detail">310170230326675</div>
                </TableRowColumn>
                <TableRowColumn>
                  <div className="label">POLICY</div>
                  <div className="label_detail"></div>
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  <div className="label">LINE PAYMENT STATUS</div>
                  <div className="label_detail">Current</div>
                </TableRowColumn>
                <TableRowColumn>
                  <div className="label">COMMUNICATION PLAN</div>
                  <div className="label_detail">AT&amp;T IoT Communication Plan Name</div>
                </TableRowColumn>
                <TableRowColumn>
                  <div className="label">RATE PLAN</div>
                  <div className="label_detail">AT&amp;TIoT Data Plan Name</div>
                </TableRowColumn>
                <TableRowColumn>
                  <div className="label">USAGE LIMIT OVERRIDE</div>
                  <div className="label_detail">None</div>
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  <div className="label">COPY RULE (SECURE SIM ID)</div>
                  <div className="label_detail">None</div>
                </TableRowColumn>
                <TableRowColumn>
                  <div className="label">COPY RULE (PASSWORD)</div>
                  <div className="label_detail">None</div>
                </TableRowColumn>
                <TableRowColumn>
                  <div className="label">CUSTOMER</div>
                  <div className="label_detail">Customer Name</div>
                </TableRowColumn>
                <TableRowColumn>
                  <div className="label">MOVE TO ANOTHER CARRIER</div>
                  <div className="label_detail">None</div>
                </TableRowColumn>
              </TableRow>

            </TableBody>
          </Table>
        </div>
        <div className={styles.table_wrap_bottom}>
          <Table selectable={this.state.selectable}>
            <TableBody displayRowCheckbox={this.state.showCheckboxes}>
              <TableRow>
                <TableRowColumn>
                  <div className="label">CARRIER</div>
                  <div className="label_detail">AT&amp;T</div>
                </TableRowColumn>
                <TableRowColumn>
                  <div className="label">LOCATION</div>
                  <div className="label_detail">United States</div>
                </TableRowColumn>
                <TableRowColumn>
                  <div className="label">SESSION START</div>
                  <div className="label_detail">4.4.2016. | 03:42 PM</div>
                </TableRowColumn>
                <TableRowColumn>
                  <div className="label"></div>
                  <div className="label_detail"></div>
                </TableRowColumn>
              </TableRow>
              <TableRow>
                <TableRowColumn>
                  <div className="label">DEVICE IP ADDRESS</div>
                  <div className="label_detail">10.192.0.40</div>
                </TableRowColumn>
                <TableRowColumn>
                  <div className="label">GGSN/PGW ADDRES</div>
                  <div className="label_detail">10.22.110.13</div>
                </TableRowColumn>
                <TableRowColumn>
                  <div className="label">APN</div>
                  <div className="label_detail">testm2m-dc8</div>
                </TableRowColumn>
                <TableRowColumn>
                  <div className="label"></div>
                  <div className="label_detail"></div>
                </TableRowColumn>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <a href="javascript:void(0)" onClick={this.handleShowDetails} title={clickText}>{clickText}</a>
      </div>
    );
  }
}

export default SimDetailsInfo;