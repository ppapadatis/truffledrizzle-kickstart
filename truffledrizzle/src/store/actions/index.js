export const action = (type, payload = {}) => (
  { type, ...payload }
);

export {
  checkMetamask,
  checkMetamaskDone,
  txErrorMetamask,
  txErrorMetamaskDone,
  txSuccessfulUpdateUI,
  checkingTxUI,
  checkingTxUIDone,
  setDrizzleState,
  getStoredValue,
  gettingStoredValue,
  gotStoredValue,
  pushToTxStack,
  txError,
  txBroadcasted,
  txSuccessful,
} from './metamask';
