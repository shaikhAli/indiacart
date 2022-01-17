import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';
import School from './pages/School';
import MyHooks from './pages/MyHooks';


function App({ count, handleDecrementClick, handleIncrementClick, handleResetClick }) {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="school" element={<School />} />
          <Route path="my-hooks" element={<MyHooks />} />
          <Route path="*" element={<NoPage />} />
        </Route>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
