/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';

// import components
import Header from 'components/Header';
import Footer from 'components/Footer';

// import styles
import styles from './style.css';


export default class App extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    return (
      <main className={styles.app}>
        <Helmet
          title="App"
          meta={[
            { name: 'description', content: 'Description of App' },
          ]}
        />
        <Header />
        {React.Children.toArray(this.props.children)}
        <Footer />
      </main>
    );
  }
}
