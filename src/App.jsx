import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import { Outlet } from 'react-router-dom'


function App() {

  return (
    <>
      <Nav></Nav>
      <Outlet></Outlet>
    </>
  )
}

export default App
