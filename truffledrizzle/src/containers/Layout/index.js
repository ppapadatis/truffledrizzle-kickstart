import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LoadingOverlay from 'react-loading-overlay';
import { Home } from '../../routes/index';

import Footer from './Footer';
import NavBar from './Navigation';

import { asyncComponent } from '../../components';

const asyncNotFound = asyncComponent(() => import('../../routes/notFound'));

class Layout extends Component {
  render() {
    const { drizzleContext: { initialized, drizzle, drizzleState } } = this.props;
    return (
      <BrowserRouter>
        <LoadingOverlay active={!initialized} spinner text="Drizzle loading...">
          <NavBar />
          <main>
            <Switch>
              <Route exact path="/" render={() => <Home drizzle={drizzle} drizzleState={drizzleState} />} />
              <Route component={asyncNotFound} />
            </Switch>
          </main>
          <Footer />
        </LoadingOverlay>
      </BrowserRouter>
    );
  }
}

Layout.propTypes = {
  drizzleContext: PropTypes.exact({
    drizzle: PropTypes.objectOf(PropTypes.any),
    drizzleState: PropTypes.objectOf(PropTypes.any),
    initialized: PropTypes.bool,
  }).isRequired,
};

export default Layout;
