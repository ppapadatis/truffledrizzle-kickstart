import React, { PureComponent } from "react";
import { drizzleConnect } from "drizzle-react"
import PropTypes from "prop-types";

class Home extends PureComponent {
  constructor(props, context) {
    super(props);
    this.contracts = context.drizzle.contracts;
  }

  render() {
    return (
      <h1>Hello Cryptoworld!</h1>
    );
  }
}

Home.contextTypes = {
  drizzle: PropTypes.object
};

export default drizzleConnect(Home);