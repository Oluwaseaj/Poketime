import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home'
import Service from './components/Service'
import About from './components/About'
import Contact from './components/contact'
import Post from './components/post';

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/service' element={<Service />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/post/:post_id' element={<Post />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
