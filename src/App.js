import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Link,
  Routes,
  Route
} from 'react-router-dom';

import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
      <h1>India Cart</h1>
      <div className="app-container">
        <ul>
          <li>
            <Link className="test" to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>

      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/about' element={< About />}></Route>
        <Route exact path='/contact' element={< Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
