import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/home';
import { Route, Routes } from 'react-router-dom';
import Courses from './components/Courses';

function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Courses' element={<Courses />} />
        </Routes>
    </div>
  )
}

export default App;