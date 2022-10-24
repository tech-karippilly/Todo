
import React from 'react';

import Home from './components/Home/home';

import store from './src/store/store';

import { Provider } from 'react-redux'

const App = () => {


  return (
    <Provider store={store}>
      <Home />
    </Provider>


  )

}


export default App;