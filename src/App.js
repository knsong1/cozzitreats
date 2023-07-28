import React from 'react';
import './App.css';
import FrontPage from './features/menu';
import About from './features/about';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Orders from './features/orders';
import Authentication from './features/createAccount';
import Login from './features/login';
import Medias from './features/Medias';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Medias />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<FrontPage />} path="/treats" />
          <Route element={<Orders />} path="/order" />
          <Route element={<Authentication />} path="/create-account"></Route>
          <Route element={<Login />} path="/login" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
