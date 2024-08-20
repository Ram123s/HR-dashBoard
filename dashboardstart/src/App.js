
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from './pages/SIGNIN/Signin';

function App() {
  return (
   <div>

    <BrowserRouter>

    <Routes>

    <Route path="/" element={<Signin />} />

    </Routes>

    </BrowserRouter>

   </div>
  );
}

export default App;
