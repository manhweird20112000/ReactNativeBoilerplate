import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import appSlice from './reducers/app';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    app: appSlice,
  },
  middleware: [sagaMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
