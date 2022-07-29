import React from 'react';
import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Profile from './pages/Profile';
import BlogDetail from './pages/BlogDetail';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <div className='brand'>Farhan's Blog</div>
      <nav className='nav'>
        <NavLink to='/' className='nav-item'>Home</NavLink>
        <NavLink to='/profile' className='nav-item'>Profile</NavLink>
        <NavLink to='/blog' className='nav-item'>Blog</NavLink>
        <NavLink to='/contact' className='nav-item'>Contact</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<BlogDetail />} />
        <Route path="contact" element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
