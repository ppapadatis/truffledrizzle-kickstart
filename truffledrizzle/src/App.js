import React from 'react';
import { DrizzleProvider } from 'drizzle-react';

import { store, config } from './store';
import { Layout } from './containers';

const App = () => (
  <DrizzleProvider store={store} options={config}>
    <Layout />
  </DrizzleProvider>
);

export default App;
