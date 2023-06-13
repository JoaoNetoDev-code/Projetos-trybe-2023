import { useParams, Link } from "react-router-dom";
import { coffeeList } from "../../data";

function Coffee() {
  const params = useParams();
  const currentCoffee = coffeeList.find((item) => item.slug === params.coffee)

  if (!currentCoffee) {
    return(
      <div>
        <h1>Oops! Esse café não está na nossa lista</h1>
        <h2>Acesse a <Link to="/coffees">Página de cafés</Link> e selecione um de nossos produtos</h2>
      </div>
    )
  }


  return (
    <div>
    <h1>{currentCoffee?.description}</h1>
    <div>
      <h2> Ingredientes</h2>
      <ul>
        {
          currentCoffee?.ingredients
            .map((item) => <li key={item}>{item}</li>)
        }
      </ul>
    </div>
        <img src={currentCoffee?.image} alt={ currentCoffee?.title } />
    </div>

  );
}

export default Coffee;