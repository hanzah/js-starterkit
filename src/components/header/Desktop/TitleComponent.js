import React, { Component } from 'react';
import styles from './HeaderComponent.scss';
class Title extends Component {
    render() {
        return (
            <div className={styles.page_title}>
                <div className={styles.mc_title}>MISSION CONTROL</div>
                <div className={styles.mc_section_title}>SIM management</div>
            </div>
        );
    }
}
export default Title;