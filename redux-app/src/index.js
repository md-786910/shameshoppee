import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./containers/store"
import { Provider } from "react-redux"
// check state of state

store.subscribe(() => console.log(store.getState()))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


