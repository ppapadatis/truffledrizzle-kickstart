import { Drizzle, generateStore } from '@drizzle/store';
import appReducers from './reducers';
import rootSagas from './sagas';
import config from './config';

const store = generateStore({
  drizzleOptions: config,
  appReducers: { appReducers },
  appSagas: rootSagas,
  disableReduxDevTools: false,
});

export const drizzle = new Drizzle(config, store);
