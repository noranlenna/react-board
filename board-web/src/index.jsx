import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import { Routes } from 'react-router';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import BoardPage from './pages/BoardPage/BoardPage';
import NotFoundPage from './pages/ErrorPage/NotFoundPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

/**
 * 404 NOT FOUND는 path를 wildcard로 준다.
 */

root.render(

  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="home" element={<HomePage />}></Route>
          <Route path="login" element={<LoginPage />}></Route>
          <Route path="board" element={<BoardPage />}></Route>
        </Route>
          <Route path="*" element={<NotFoundPage/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
