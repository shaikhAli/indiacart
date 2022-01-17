import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss'
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
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

