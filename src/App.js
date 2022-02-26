import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import ArticleCreate from './components/ArticleCreate';
import ArticleDisplay from './components/ArticleDisplay';
import ArticleEdit from './components/ArticleEdit';
import ArticleList from './components/ArticleList';
import Footer from './components/Footer';
import Login from './components/Login';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Navigate replace to='/articles' />} />
        <Route path='/articles' element={<ArticleList />} />
        <Route path='/articles/:id' element={<ArticleDisplay />} />
        <Route path='/articles/create' element={<ArticleCreate />} />
        <Route path='/articles/:id/edit' element={<ArticleEdit />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;