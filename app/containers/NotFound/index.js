/*
 *
 * NotFound
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
// import styles from './style.styl';

export default class NotFound extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="NotFound"
          meta={[
            { name: 'description', content: 'Description of NotFound' },
          ]}
        />
      Not Found
      </div>
    );
  }
}
