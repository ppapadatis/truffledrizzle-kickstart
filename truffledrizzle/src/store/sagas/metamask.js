import { put } from 'redux-saga/effects';
import * as actions from '../actions';

export function* showMetaMaskOverlaySaga() {
  yield put(actions.checkMetamask());
}

export function* showTxErrorMsgSaga() {
  yield put(actions.txErrorMetamask());
}

export function* showCheckingTxMsgSaga() {
  yield put(actions.checkingTxUI());
}

export function* txSuccessfulSaga() {
  yield put(actions.txSuccessfulUpdateUI());
  yield put(actions.getStoredValue());
}
