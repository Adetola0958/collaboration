import React from 'react';
import ReactDOM from 'react-dom';
//import "./assets/css/try/bootstrap.min.css"
import "./assets/css/bootstrap.min.css"
import App from './App';

import {Provider} from "react-redux"
import configureStore from './redux/store';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import reportWebVitals from './reportWebVitals';

const store = configureStore()

const persistor = persistStore(store)

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
