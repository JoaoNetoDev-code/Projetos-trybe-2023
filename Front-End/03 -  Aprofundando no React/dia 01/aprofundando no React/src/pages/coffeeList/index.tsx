import { Link, useNavigate } from 'react-router-dom'
import {coffeeList} from '../../data'

function CoffeeList() {
  const navigate = useNavigate();

  const handleCkick = () => {
    navigate('/');
  }
  return (
    <div>
      <h1>Nossos cafés</h1>
        <main>
          <ul>
            {
              coffeeList.map((coffee) => (
                <Link to={`/coffees/${coffee.slug}`} key={ coffee.id} >
                  <li>{coffee.title}</li>
                </Link>
              ))
            }  
          </ul>      
        </main>
      <button onClick={ handleCkick } >Inicio</button>
    </div>
  );
}

export default CoffeeList;