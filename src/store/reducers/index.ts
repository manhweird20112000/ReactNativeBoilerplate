import appSlice from '@reducers/app';
import notificationSlice from '@reducers/notification';
import { combineReducers } from '@reduxjs/toolkit';
export const rootReducer = combineReducers({
  app: appSlice,
  notification: notificationSlice,
});
