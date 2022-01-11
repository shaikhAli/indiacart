import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import './index.scss'
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { BrowserRouter } from "react-router-dom";

import Home from './components/Home';
import { Provider } from 'react-redux';


import { createStore } from 'redux';

const countReducer = function (state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

let store = createStore(countReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
      
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
