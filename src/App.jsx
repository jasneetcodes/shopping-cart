import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'


function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <Nav cart={cart}></Nav>
      <Outlet context={[cart, setCart]}></Outlet>
    </>
  )
}

export default App
