import React from 'react';
import Article from './pages/Article';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/article' element={<Article/>} />
      </Routes>
    </BrowserRouter>
  </div>;
};

export default App;
