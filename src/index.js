import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
// import Reducer1 from './store/reducers/reducer1';
import rootReducer from './store/reducers';  //index.js (from that folder) automatically gets pulles if end if blank
import { createStore } from 'redux';

let store = createStore(rootReducer)

// Wrapping the <App/> in <Provider>...</Provider> 
// makes the Redux store / and Redux State available to the entire app
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);


