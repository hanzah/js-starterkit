import React, {PropTypes} from 'react';
import { FormattedMessage } from 'react-intl';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import SimOptions from './simoptions';
import cn from 'classnames';

import styles from './SimsOverview.scss';

const {array, func, object, bool} = PropTypes

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
        <ReactCSSTransitionGroup
          transitionName={{
          enter: styles.appear,
          enterActive: styles.appear_active,
          leave: styles.leave,
          leaveActive: styles.leave_active
        }}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>

          {this.props.showOptions ? <SimOptions/> : ''}

        </ReactCSSTransitionGroup>
        <div className={styles.table_wrap}>
          <div className={styles.div_shadow}></div>
          <Table
            className={styles.mc_sim_table}
            fixedHeader
            multiSelectable
            onRowSelection={this.onRowSelection}>
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
        <TableHeaderColumn><FormattedMessage id="SIMNUMBER" defaultMessage="SIM NUMBER" /></TableHeaderColumn>
        <TableHeaderColumn><FormattedMessage id="DATARATEPLAN" defaultMessage="DATA RATE PLAN" /></TableHeaderColumn>
        <TableHeaderColumn><FormattedMessage id="ACTIVESESSION" defaultMessage="ACTIVE SESSION" /></TableHeaderColumn>
        <TableHeaderColumn><FormattedMessage id="IPADDRESS" defaultMessage="IP ADDRESS" /></TableHeaderColumn>
        <TableHeaderColumn><FormattedMessage id="NETWORK" defaultMessage="NETWORK" /></TableHeaderColumn>
        <TableHeaderColumn><FormattedMessage id="COUNTRY" defaultMessage="COUNTRY" /></TableHeaderColumn>
        <TableHeaderColumn><FormattedMessage id="STATUS" defaultMessage="STATUS" /></TableHeaderColumn>
      </TableRow>
    )
  }

  renderSims() {
    return this.props.sims.map((sim) => {
        return (
          <TableRow key={sim.number} selected={!!this.props.selectedSims[sim.number]}>
            <TableRowColumn>{sim.number}</TableRowColumn>
            <TableRowColumn>{sim.plan}</TableRowColumn>
            <TableRowColumn>{sim.sessions} Mb</TableRowColumn>
            <TableRowColumn>{sim.ipAddress}</TableRowColumn>
            <TableRowColumn>{sim.network}</TableRowColumn>
            <TableRowColumn>{sim.country}</TableRowColumn>
            <TableRowColumn className={statusClass(sim.status)}><div><span></span>{sim.status}</div></TableRowColumn>
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
        //ToDo: Because of the dirty hack. Remove it as well!!! selectedRows.pop()
        sims = selectedRows.map((index) => {
          return this.props.sims[index]
        })
      
    }
    this
      .props
      .onRowSelection(sims)
  }
}

SimTable.propTypes = {
  sims: array,
  onRowSelection: func,
  selectedSims: object,
  showOptions: bool
}

export default SimTable;
