import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar, Footer } from './Components/index.js'


function App() {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
