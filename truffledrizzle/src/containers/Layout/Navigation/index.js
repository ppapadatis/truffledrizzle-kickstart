import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class NavBar extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <header>
        { children }
      </header>
    );
  }
}

NavBar.defaultProps = {
  children: null,
};

NavBar.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default NavBar;
