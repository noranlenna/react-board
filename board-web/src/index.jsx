import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
// react-router, react-router-dom
import { Routes } from 'react-router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // global
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePage></HomePage>}></Route>
      </Routes>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
