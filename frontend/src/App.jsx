import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from './components/home.jsx'
import Dashboard from './components/dashboard.jsx'
import PrivateRouter from './components/privateRoute.jsx'

function App() {
  return (
    <div>
      <>
      <Routes>
        <Route path='/' element={ <Home />} />

        <Route path='/dashboard' element={
          <PrivateRouter>
            <Dashboard />
          </PrivateRouter>
        } />

      </Routes>

      </>
    </div>
  )
}

export default App
