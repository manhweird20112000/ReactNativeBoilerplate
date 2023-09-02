import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store';
import {Welcome} from './src/pages/welcome';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Welcome />
    </Provider>
  );
}

export default App;
