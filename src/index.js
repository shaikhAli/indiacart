import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
// import Counter from './components/Counter'
import countReducer from './reducers/CounterReducer';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();


let store = createStore(countReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      {/* <Counter /> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
