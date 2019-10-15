import { Drizzle, generateStore } from 'drizzle';
import appReducers from './reducers';
import rootSagas from './sagas';
import config from './config';

export const store = generateStore({
  drizzleOptions: config,
  appReducers: { appReducers },
  appSagas: rootSagas,
  disableReduxDevTools: false,
});

export const drizzle = new Drizzle(config);
