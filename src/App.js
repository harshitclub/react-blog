import React from 'react';
import Home from './pages/Home/Home.jsx'
import Blog from './pages/Blog/Blog.jsx'
import './index.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';


function App() {
  return (
    <div className='container'>
    <Router>
      <Routes>
    <Route path="/" exact element={<Home/>} />
    <Route path="/blog/:id" element={<Blog/>} />
    </Routes>
    </Router>
    </div>
  );
}

export default App;
