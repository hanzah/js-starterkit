import React, { PropTypes, Component } from 'react'
import {  DesktopSidebarComponent } from 'components/sidebar'
import {  DesktopContentComponent } from 'components/content'
import {  DesktopHeaderComponent } from 'components/header'
import styles from './SimCardLayout.scss'

const { object } = PropTypes

class SimCardLayout extends Component {


    render() {
        return (
            <div className={styles.mc_global_container}>
                <DesktopSidebarComponent />
                <DesktopHeaderComponent />
                <div className={styles.mc_main_container}>
                    <DesktopContentComponent content={this.props.children} />
                </div>
            </div>
        );
    }
}

export default SimCardLayout;

SimCardLayout.propTypes = {
 children: object
}