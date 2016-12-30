/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import styles from './style.css';
import RuterLink from 'components/RouterLink';

export default class Home extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={styles.home}>
        <Helmet
          title="Home"
          meta={[
            { name: 'description', content: 'Description of Home' },
          ]}
        />
        <RuterLink to="/info" text="go to info" />
      </div>
    );
  }
}
