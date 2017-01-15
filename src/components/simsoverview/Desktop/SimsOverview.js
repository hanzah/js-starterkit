import React, { PropTypes } from 'react';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import SimOptions from './simoptions';
import cn from 'classnames';

import styles from './SimsOverview.scss';

const { array, func, object, bool } = PropTypes

const statusClass = (status) => {
  const isActive = status === 'ACTIVE'
  const isInactive = status === 'INACTIVE'
  const isActivationReady = status === 'ACTIVATION READY'
  return cn({
    [styles.active]: isActive,
    [styles.inactive]: isInactive,
    [styles.activation_ready]: isActivationReady
  })
}

class SimTable extends React.Component {
  render() {
    return (
      <div>
        <SimOptions showClass={this.props.showOptions} />
        <div className={styles.table_wrap}>
          <div className={styles.div_shadow}></div>
          <Table
            className={styles.mc_sim_table}
            fixedHeader
            multiSelectable
            onRowSelection={this.onRowSelection}
            >
            <TableHeader>
              {this.renderHeader()}
            </TableHeader>
            <TableBody deselectOnClickaway={false}>
              {this.renderSims()}
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }

  renderHeader() {
    return (
      <TableRow>
        <TableHeaderColumn>SIM NUMBER</TableHeaderColumn>
        <TableHeaderColumn>DATA RATE PLAN</TableHeaderColumn>
        <TableHeaderColumn>ACTIVE SESSION</TableHeaderColumn>
        <TableHeaderColumn>IP ADDRESS</TableHeaderColumn>
        <TableHeaderColumn>NETWORK</TableHeaderColumn>
        <TableHeaderColumn>COUNTRY</TableHeaderColumn>
        <TableHeaderColumn>STATUS</TableHeaderColumn>
      </TableRow>
    )
  }

  renderSims() {
    return this.props.sims.map((sim) => {
      return (
        <TableRow key={sim.number} selected={!!this.props.selectedSims[sim.number]}>
          <TableRowColumn>{sim.number}</TableRowColumn>
          <TableRowColumn>{sim.plan}</TableRowColumn>
          <TableRowColumn>{sim.sessions}</TableRowColumn>
          <TableRowColumn>{sim.ipAddress}</TableRowColumn>
          <TableRowColumn>{sim.network}</TableRowColumn>
          <TableRowColumn>{sim.country}</TableRowColumn>
          <TableRowColumn className={statusClass(sim.status)}>{sim.status}</TableRowColumn>
        </TableRow>
      )
    })
  }

  onRowSelection = (selectedRows) => {
    let sims;
    switch (selectedRows) {
      case 'all':
        sims = this.props.sims
        break;
      case 'none':
        sims = []
        break;
      default:
        //ToDo: Because of the dirty hack. Remove it as well!!!
        //selectedRows.pop()
        sims = selectedRows.map((index) => {
          return this.props.sims[index]
        })
    }
    this.props.onRowSelection(sims)
  }
}

SimTable.propTypes = {
  sims: array,
  onRowSelection: func,
  selectedSims: object,
  showOptions: bool
}

export default SimTable;
