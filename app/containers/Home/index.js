/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import styles from './style.css';
// import RuterLink from 'components/RouterLink';
import LoadingIndicator from 'components/LoadingIndicator';
import List from 'components/List';
import ListItem from 'components/ListItem';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { selectUsername } from './selectors';
import { selectRepos, selectLoading, selectError } from 'containers/App/selectors';

export class Home extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    let mainContent = null;

    // Show a loading indicator when we're loading
    if (this.props.loading) {
      mainContent = (<List component={LoadingIndicator} />);

      // Show an error if there is one
    } else if (this.props.error !== false) {
      const ErrorComponent = () => (<ListItem item={'Something went wrong, please try again!'} />);
      mainContent = (<List component={ErrorComponent} />);

      // If we're not loading, don't have an error and there are repos, show the repos
    } else if (this.props.repos !== false) {
      const RepoListItem = () => (<ListItem item={'RepoListItem!'} />);
      mainContent = (<List items={this.props.repos} component={RepoListItem} />);
    }
    return (
      <div className={styles.home}>
        <Helmet
          title="Home Page"
          meta={[{
            name: 'description',
            content: 'A React.js Boilerplate application homepage',
          },
          ]}
        />
        <div className={styles.wrapper}>
          <section>
            <h2>
              one
            </h2>
            <p>
              two
            </p>
          </section>
          <section>
            <h2>
              three
            </h2>
            <form onSubmit={this.props.onSubmitForm}>
              <label htmlFor="username">
                all
                <input id="username" type="text" placeholder="mxstbr" value={this.props.username} onChange={this.props.onChangeUsername} />
              </label>
            </form>
            {mainContent}
          </section>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  repos: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  onSubmitForm: React.PropTypes.func,
  username: React.PropTypes.string,
  onChangeUsername: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault) {
        evt.preventDefault();
      }
      dispatch(loadRepos());
    },
  };
}

const mapStateToProps = createStructuredSelector({ repos: selectRepos(), username: selectUsername(), loading: selectLoading(), error: selectError() });

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(Home);
