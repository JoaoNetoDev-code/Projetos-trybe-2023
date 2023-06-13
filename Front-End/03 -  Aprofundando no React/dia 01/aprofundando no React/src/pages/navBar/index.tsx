import { NavLink } from 'react-router-dom';

import './nav-bar.css'

function Navbar() {
  return (
    <nav>
      <div>
      <NavLink to="/" >Home</NavLink>
      </div>
      <div>
      <NavLink to="/coffees" >Cafés</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
