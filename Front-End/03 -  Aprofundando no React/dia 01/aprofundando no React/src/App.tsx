import { Route, Routes, } from 'react-router-dom'
import Navbar from './pages/navBar/index';
import Home from './pages/home/index';
import CoffeeList from './pages/coffeeList/index';
import Coffee from './pages/coffee';
import './App.css'

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/coffees' element={ <CoffeeList /> } />
      <Route path='/coffees/:coffee' element={ <Coffee /> } />
    </Routes>
    </>
  )
}

export default App
