import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store';
import {AppNavigator} from './src/navigations';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

export default App;
