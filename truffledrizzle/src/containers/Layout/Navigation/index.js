import React, { PureComponent } from 'react';

class NavBar extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        {this.props.children}
      </header>
    );
  }
}

export default NavBar;
