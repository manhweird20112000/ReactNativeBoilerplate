import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import reactotron from '@infra/reactotron';
import root from '@sagas/index';
import { MMKVStorage } from '@utils/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { rootReducer } from '@reducers/index';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage: MMKVStorage,
  blacklist: ['example'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [sagaMiddleware],
  // @ts-ignore
  enhancers: [reactotron.createEnhancer()],
});
sagaMiddleware.run(root);

export const persist = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;

export default store;
