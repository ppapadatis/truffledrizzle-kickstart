import { combineReducers } from 'redux';
import metamaskReducer from './metamask';

export const updateState = (oldObject, updatedProperties) => ({
  ...oldObject,
  ...updatedProperties,
});

export default combineReducers({ metamaskReducer });
