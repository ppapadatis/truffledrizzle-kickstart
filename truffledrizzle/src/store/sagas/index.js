import { takeLatest } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import {
  showMetaMaskOverlaySaga,
  showTxErrorMsgSaga,
  showCheckingTxMsgSaga,
  txSuccessfulSaga,
} from './metamask';

function* watchMetamaskSaga() {
  yield takeLatest(actionTypes.PUSH_TO_TXSTACK, showMetaMaskOverlaySaga);
  yield takeLatest(actionTypes.TX_ERROR, showTxErrorMsgSaga);
  yield takeLatest(actionTypes.TX_BROADCASTED, showCheckingTxMsgSaga);
  yield takeLatest(actionTypes.TX_SUCCESSFUL, txSuccessfulSaga);
}

export default [
  watchMetamaskSaga,
];
