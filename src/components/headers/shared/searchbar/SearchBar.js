import React, { Component, PropTypes } from 'react';
import styles from './SearchBar.scss';
import CurrentContext from 'utils/currentContext'
import ImageSelector from 'utils/imageSelector'

const magnifier = ImageSelector(CurrentContext.theme, 'magnifier.png');

const {func, string} = PropTypes;

class SearchBar extends Component {
  render() {
    return (
      <div className={styles.search_bar_position} data-spec='search-bar'>
        <div className={styles.search_bar}>
          <form onSubmit={this.props.onSubmit}>
            <img src={magnifier} alt="Search" />
            <input placeholder={'Search ' + this.props.name} />
          </form>
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  name: string,
  onSubmit: func
}

export default SearchBar;
