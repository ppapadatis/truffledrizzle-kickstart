import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { drizzleConnect } from 'drizzle-react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LoadingOverlay from 'react-loading-overlay';
import * as actions from '../../store/actions';
import { Home } from '../../routes/index';

import Footer from './Footer';
import NavBar from './Navigation';

const asyncNotFound = asyncComponent(() => import('../../routes/notFound'));

class Layout extends Component {
  constructor(props, context) {
    super(props);
    const { onSetDrizzleState } = this.props;
    onSetDrizzleState(context.drizzle);
  }

  render() {
    return (
      <BrowserRouter>
        <LoadingOverlay
          active={!this.props.initialized}
          spinner
          text="Drizzle loading..."
        >
          <NavBar />
          <main ref="main">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route component={asyncNotFound} />
            </Switch>
          </main>
          <Footer />
        </LoadingOverlay>
      </BrowserRouter>
    );
  }
}

Layout.contextTypes = {
  drizzle: PropTypes.object,
};

const mapStateToProps = state => ({
  initialized: state.drizzleStatus,
});

const mapDispatchToProps = dispatch => ({
  onSetDrizzleState: (drizzle) => dispatch(actions.setDrizzleState(drizzle)),
});

export default drizzleConnect(Layout, mapStateToProps, mapDispatchToProps);
