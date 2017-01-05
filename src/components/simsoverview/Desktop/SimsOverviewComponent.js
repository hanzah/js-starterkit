import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import styles from './SimsOverviewComponent.scss';

class SimTable extends React.Component {
   
    constructor(props) {
    super(props);

    this.state = {
      fixedHeader: true,
      stripedRows: false,
      showRowHover: false,
      selectable: true,
      multiSelectable: true,
      enableSelectAll: true,
      showCheckboxes: true
    };
  }

render(){

    return(
      <div>
      <div className={styles.test}></div>
<MuiThemeProvider>
  <Table className={styles.mc_sim_table} fixedHeader={this.state.fixedHeader}
         selectable={this.state.selectable}
         multiSelectable={this.state.multiSelectable}
  >
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>SIM NUMBER</TableHeaderColumn>
        <TableHeaderColumn>DATA RATE PLAN</TableHeaderColumn>
        <TableHeaderColumn>ACTIVE SESSION</TableHeaderColumn>
        <TableHeaderColumn>IP ADDRESS</TableHeaderColumn>
        <TableHeaderColumn>NETWORK</TableHeaderColumn>
        <TableHeaderColumn>COUNTRY</TableHeaderColumn>
        <TableHeaderColumn>STATUS</TableHeaderColumn>      
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn>8901170425230326675</TableRowColumn>
        <TableRowColumn>AT&amp;T Data Rate Plan</TableRowColumn>
        <TableRowColumn>430 Mb</TableRowColumn>
        <TableRowColumn>10.70.196.202</TableRowColumn> 
        <TableRowColumn>AT&amp;T</TableRowColumn> 
        <TableRowColumn>USA</TableRowColumn> 
        <TableRowColumn className={styles.active}>ACTIVE</TableRowColumn> 
      </TableRow>
      <TableRow>
        <TableRowColumn>8901170425230326675</TableRowColumn>
        <TableRowColumn>AT&amp;T Data Rate Plan</TableRowColumn>
        <TableRowColumn>430 Mb</TableRowColumn>
        <TableRowColumn>10.70.196.202</TableRowColumn> 
        <TableRowColumn>AT&amp;T</TableRowColumn> 
        <TableRowColumn>USA</TableRowColumn> 
        <TableRowColumn className={styles.activation_ready}>ACTIVATION READY</TableRowColumn> 
      </TableRow>
   <TableRow>
        <TableRowColumn>8901170425230326675</TableRowColumn>
        <TableRowColumn>AT&amp;T Data Rate Plan</TableRowColumn>
        <TableRowColumn>430 Mb</TableRowColumn>
        <TableRowColumn>10.70.196.202</TableRowColumn> 
        <TableRowColumn>AT&amp;T</TableRowColumn> 
        <TableRowColumn>USA</TableRowColumn> 
        <TableRowColumn className={styles.inactive}>INACTIVE</TableRowColumn> 
      </TableRow>
   <TableRow>
        <TableRowColumn>8901170425230326675</TableRowColumn>
        <TableRowColumn>AT&amp;T Data Rate Plan</TableRowColumn>
        <TableRowColumn>430 Mb</TableRowColumn>
        <TableRowColumn>10.70.196.202</TableRowColumn> 
        <TableRowColumn>AT&amp;T</TableRowColumn> 
        <TableRowColumn>USA</TableRowColumn> 
        <TableRowColumn className={styles.active}>ACTIVE</TableRowColumn> 
      </TableRow>
    </TableBody>
  </Table>
 </MuiThemeProvider>
 </div>

    );
}

}

export default SimTable;