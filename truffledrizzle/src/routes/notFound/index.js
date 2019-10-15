import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { drizzleConnect } from 'drizzle-react';


class NotFound extends PureComponent {
  render() {
    return (
      <h1>404: Not Found!</h1>
    );
  }
}

NotFound.contextTypes = {
  drizzle: PropTypes.object,
};

export default drizzleConnect(NotFound);
