import * as actionTypes from './actionTypes';
import { action } from './helpers';

export const checkMetamask = () => action(actionTypes.CHECK_METAMASK);
export const checkMetamaskDone = () => action(actionTypes.CHECK_METAMASK_DONE);
export const txErrorMetamask = () => action(actionTypes.TX_ERROR_METAMASK);
export const txErrorMetamaskDone = () => action(actionTypes.TX_ERROR_METAMASK_DONE);
export const checkingTxUI = () => action(actionTypes.CHECKING_TX_UI);
export const checkingTxUIDone = () => action(actionTypes.CHECKING_TX_UI_DONE);
export const txSuccessfulUpdateUI = () => action(actionTypes.TX_SUCCESSFUL_UPDATE_UI);
export const setDrizzleState = drizzle => action(actionTypes.SET_DRIZZLE_STATE, { drizzle });
export const gettingStoredValue = () => action(actionTypes.GETTING_STORED_VALUE);
export const gotStoredValue = storedValue => action(actionTypes.GOT_STORED_VALUE, { storedValue });
export const getStoredValue = () => action(actionTypes.GET_STORED_VALUE);
export const pushToTxStack = () => action(actionTypes.PUSH_TO_TXSTACK);
export const txError = () => action(actionTypes.TX_ERROR);
export const txBroadcasted = () => action(actionTypes.TX_BROADCASTED);
export const txSuccessful = () => action(actionTypes.TX_SUCCESSFUL);
