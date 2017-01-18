import React, { Component } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import styles from './SimDetailsTabs.scss';

const sessionData = [
  {
    assetId: 'Asset ID',
    sessionStart: 'April 18TH 2016 | 2:31 PM',
    dataVolume: '403.025',
    duration: '10:00'
  }, {
    assetId: 'Asset ID',
    sessionStart: 'April 18TH 2016 | 2:31 PM',
    dataVolume: '403.025',
    duration: '10:00'
  }, {
    assetId: 'Asset ID',
    sessionStart: 'April 18TH 2016 | 2:31 PM',
    dataVolume: '403.025',
    duration: '10:00'
  }
];

class Sessions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fixedHeader: true,
      showCheckboxes: false,
      selectable: false
    };
  }
  render() {
    return (
      <div>
        <Table fixedHeader={this.state.fixedHeader} className={styles.sim_details_table} selectable={this.state.selectable}>
          <TableHeader displaySelectAll={this.state.showCheckboxes} adjustForCheckbox={this.state.showCheckboxes}>
            <TableRow>
              <TableHeaderColumn>Asset ID</TableHeaderColumn>
              <TableHeaderColumn>Session Start</TableHeaderColumn>
              <TableHeaderColumn>Data Volume (KB)</TableHeaderColumn>
              <TableHeaderColumn>Duration (Min)</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={this.state.showCheckboxes}>
            {sessionData.map((row, index) => (
              <TableRow key={index} >
                <TableRowColumn>{row.assetId}</TableRowColumn>
                <TableRowColumn>{row.sessionStart}</TableRowColumn>
                <TableRowColumn>{row.dataVolume}</TableRowColumn>
                <TableRowColumn>{row.duration}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default Sessions;