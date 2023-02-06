import './scss/App.scss';
import SimpleCardComponent from './components/SimpleCardComponent.js';
import {UsePokemonGeneral} from './Hooks/UsePokemonGeneral.js';
import { Link } from 'react-router-dom';

function App() {
  const {listPokemons, UpdateListPokemons} = UsePokemonGeneral();
  if(!listPokemons) return null;
  return (
    <section className="App">
      <h1 className='App_h1'>Pokedex</h1>
      {
      listPokemons.map((results,index) =>
        <Link to ={`/pokemon/${index+1}`}
        key={index}>
           <SimpleCardComponent
          pokemonName={results.name}
          pokemonId={index+1}/>
        </Link>
        
      )}
    </section>
  );
}
export default App;
