import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home'
import Service from './components/Service'
import About from './components/About'
import Contact from './components/contact'
import Post from './components/post';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <Routes>
            <Route exact path='/' Component={Home} />
            <Route path='/service' Component={Service} />
            <Route path='/about' Component={About} />
            <Route path='/contact' Component={Contact} />
            <Route path='/post/:post_id' Component={Post} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}



export default App;
