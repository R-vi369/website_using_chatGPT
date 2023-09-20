import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx'

const Change = () => {
  return (
    <>
    
      <Router>
        <Routes>
        <Route index element={<Home />} />
        </Routes>
       </Router>

    </>
  )
}

export default Change