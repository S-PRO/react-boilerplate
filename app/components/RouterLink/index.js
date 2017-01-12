/**
*
* Link
*
*/

import React, { PropTypes } from 'react';
import styles from './style.css';
import { Link } from 'react-router';

class RouterLink extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    text: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  }

  render() {
    return (
      <Link className={styles.routerLink} to={this.props.to}>
        {this.props.text}
      </Link>
    );
  }
}

export default RouterLink;
