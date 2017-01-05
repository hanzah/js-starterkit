import React, { Component } from 'react';
import styles from './HeaderComponent.scss';
class SearchBar extends Component {
    render() {
        return (
            <div className={styles.search_bar_position}>
                <input className={styles.search_bar} placeholder="Search SIM" />
            </div>
        );
    }
}
export default SearchBar;