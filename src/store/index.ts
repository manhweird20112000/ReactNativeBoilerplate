import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import appSlice from './reducers/app';
import reactotron from '@infra/reactotron';
import root from '@sagas/index';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    app: appSlice,
  },
  middleware: [sagaMiddleware],
  enhancers: [reactotron.createEnhancer()],
});
sagaMiddleware.run(root);

export type RootState = ReturnType<typeof store.getState>;

export default store;
