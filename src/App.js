import { useEffect, useState } from 'react';
import './scss/App.scss';
import SimpleCardComponent from './components/SimpleCardComponent.js';
import axios from 'axios';

function App() {
  const [listPokemons, setListPokemons] = useState('');
  const urlBase = "https://pokeapi.co/api/v2";
  
  useEffect(() => {
    getPokemons();
  },[]);
  
  const getPokemons = () =>{
    try{
      axios.get(`${urlBase}/pokemon`)
      .then((response) =>{
        setListPokemons(response.data.results);
      });
    }catch(error){
      console.error(error);
    }
  }

  if(!listPokemons) return null;

  return (
    <section className="App">
      <h1 className='App_h1'>Pokedex</h1>
      {
      listPokemons.map((results,index) =>
        <SimpleCardComponent
        key={index}
        pokemonName={results.name}
        url={results.url}/>
      )}
    </section>
  );
}
export default App;
