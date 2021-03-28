import * as actionTypes from '../actions/actionTypes';
import { updateState } from './helpers';

const initialState = {
  checkMetaMask: false,
  metaMaskReject: false,
  checkingTx: false,
  txSuccessful: false,
  drizzle: null,
  gotStoredValue: false,
  storedValue: {},
};

const checkMetamask = state => updateState(state, { checkMetaMask: true });
const checkMetamaskDone = state => updateState(state, { checkMetaMask: false });
const txErrorMetamask = state => updateState(state, { checkMetaMask: false, metaMaskReject: true });
const txErrorMetamaskDone = state => updateState(state, { metaMaskReject: false });
const checkingTxUI = state => updateState(state, { checkMetaMask: false, checkingTx: true });
const checkingTxUIDone = state => updateState(state, { checkMetaMask: false, checkingTx: false });
const txSuccessfulUpdateUI = state => updateState(state, { checkingTx: false, txSuccessful: true });
const setDrizzleState = (state, action) => updateState(state, { drizzle: action.drizzle });
const gettingStoredValue = state => updateState(state, { gotStoredValue: false });
const gotStoredValue = state => updateState(state, { gotStoredValue: true, storedValue: {} });

const metamaskReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case actionTypes.CHECK_METAMASK: return checkMetamask(state, action);
    case actionTypes.CHECK_METAMASK_DONE: return checkMetamaskDone(state, action);
    case actionTypes.TX_ERROR_METAMASK: return txErrorMetamask(state, action);
    case actionTypes.TX_ERROR_METAMASK_DONE: return txErrorMetamaskDone(state, action);
    case actionTypes.CHECKING_TX_UI: return checkingTxUI(state, action);
    case actionTypes.CHECKING_TX_UI_DONE: return checkingTxUIDone(state, action);
    case actionTypes.TX_SUCCESSFUL_UPDATE_UI: return txSuccessfulUpdateUI(state, action);
    case actionTypes.SET_DRIZZLE_STATE: return setDrizzleState(state, action);
    case actionTypes.GETTING_STORED_VALUE: return gettingStoredValue(state, action);
    case actionTypes.GOT_STORED_VALUE: return gotStoredValue(state, action);
    default: return state;
  }
};

export default metamaskReducer;
