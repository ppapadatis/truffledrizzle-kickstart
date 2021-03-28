import React from 'react';
import { DrizzleContext } from '@drizzle/react-plugin';

import { drizzle } from './store';
import { Layout } from './containers';

const App = () => (
  <DrizzleContext.Provider drizzle={drizzle}>
    <DrizzleContext.Consumer>
      { drizzleContext => <Layout drizzleContext={drizzleContext} />}
    </DrizzleContext.Consumer>
  </DrizzleContext.Provider>
);

export default App;
