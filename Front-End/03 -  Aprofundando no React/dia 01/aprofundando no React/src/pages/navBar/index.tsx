import { NavLink } from 'react-router-dom';

import './nav-bar.css'

function Navbar() {
  return (
    <header className="nav-bar">
      <nav className='nav'>
      <NavLink to="/" >Home</NavLink>
      <NavLink to="/coffees" >Cafés</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
