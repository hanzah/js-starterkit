import React, { Component } from 'react';
import styles from './SearchBar.scss';
import CurrentContext from 'utils/currentContext'
import ImageSelector from 'utils/ImageSelector'

const magnifier = ImageSelector(CurrentContext.theme, 'magnifier.png');

class SearchBar extends Component {

  render() {
    return (
      <div className={styles.search_bar_position} data-spec='sarch-bar'>
        <div className={styles.search_bar}>
          <form onSubmit={this.props.onSubmit}>
            <img src={magnifier} alt="Search" />
            <input placeholder={'Search ' + this.props.name} ref="sim" />
          </form>
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  name: React.PropTypes.string,
  onSubmit: React.PropTypes.func
}

export default SearchBar;