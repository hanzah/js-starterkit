import React from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

import styles from './SimDetailsTabs.scss';

const changesData = [
  {
    dateTime: '18.3.2016 | 3:00 PM',
    note: 'User John Smith made rate plan change on 18.3.2016.:"Customer SIM appeared under a wrong plan"',
    status: 'pending changes'
  }, {
    dateTime: '18.3.2016 | 3:00 PM',
    note: 'User John Doe made end user address change on 17.3.2016.:"User ZIP code was wrong"',
    status: 'completed'
  }, {
    dateTime: '18.3.2016 | 3:00 PM',
    note: 'User John Smith made rate plan change on 10.2.2016.',
    status: 'completed'
  }
];

const Changes = () => {
  return (
    <div>
      <Table fixedHeader={true} className={styles.sim_changes_table} selectable={false}>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>Date & Time</TableHeaderColumn>
            <TableHeaderColumn>Note</TableHeaderColumn>
            <TableHeaderColumn>Status</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
          {changesData.map((row, index) => (
            <TableRow key={index} >
              <TableRowColumn>{row.dateTime}</TableRowColumn>
              <TableRowColumn>{row.note}</TableRowColumn>
              <TableRowColumn className={styles.active}>{row.status}</TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Changes;