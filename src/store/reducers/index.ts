import appSlice from '@reducers/app';
import { combineReducers } from '@reduxjs/toolkit';
export const rootReducer = combineReducers({
  app: appSlice,
});
