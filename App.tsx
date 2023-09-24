import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import store, { persist } from './src/store';
import { AppNavigator } from './src/navigations';
import { PersistGate } from 'redux-persist/integration/react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate persistor={persist}>
        <GestureHandlerRootView className={'flex-1'}>
          <AppNavigator />
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
}

export default App;
