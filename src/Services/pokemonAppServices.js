import axios from 'axios';

export const urlBase = "https://pokeapi.co/api/v2";

export const getPokemons = async () =>{
    const result = await axios.get(`${urlBase}/pokemon`);
    return result.data.results;
}

export const getPokemon = async (pokemonId) => {
    const result = await axios.get(`${urlBase}/pokemon/${pokemonId}`);
    return result.data;
}