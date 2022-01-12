import React from 'react';
import './App.scss';
import {
  BrowserRouter,
  Link,
  Routes,
  Route
} from 'react-router-dom';

import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';

import { connect } from 'react-redux';



const mapStateToProps = state => {
  return {
    count: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleDecrementClick: () => dispatch({ type: 'DECREMENT' }),
    handleIncrementClick: () => dispatch({ type: 'INCREMENT' }),
    handleResetClick: () => dispatch({ type: 'RESET' }),
  }
}

function App({ count, handleDecrementClick, handleIncrementClick, handleResetClick }) {
  return (
    // <div className="app-container">
    //   <button className='btn btn-primary'>Add Counter</button>
    //   <p className='app-text'>Hello Redux! Here is your Counter { count}</p>
    // </div>
    <div className='container'>
      <button type="button" className="btn btn-secondary button" onClick={handleDecrementClick}>Decrement</button>
      <button type="button" className="btn btn-primary button" onClick={handleIncrementClick}>Increment</button>
      <button type="button" className="btn btn-danger" onClick={handleResetClick}>Reset</button>
      <h1>Helloworld React & Redux! Counter is </h1>
      <p><span className='counter-text'>{count}</span></p>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
