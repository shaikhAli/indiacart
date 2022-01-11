import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './index.scss'
import reportWebVitals from './reportWebVitals';
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';

const Component = ({ count, handleDecrementClick,handleIncrementClick }) => {

  return (
    <div className='container'>
      <button type="button" className="btn btn-primary button" onClick={handleDecrementClick}>Decrement</button>
      <button type="button" className="btn btn-secondary button" onClick={handleIncrementClick}>Increment</button>
      <h1>Helloworld React & Redux! {count}</h1>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    count: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleDecrementClick: () => dispatch({ type: 'INCREMENT' }),
    handleIncrementClick: () =>dispatch({type:'DECREMENT'})
  }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

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
      <Container />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
