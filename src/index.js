/* global GLOBALS */
import React from 'react'
import ReactDOM from 'react-dom';
import './index.css';

class Root extends React.Component {
  render() {
    return (
      <div>Hello {GLOBALS.FRONT_ENV}</div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('react-root'));
