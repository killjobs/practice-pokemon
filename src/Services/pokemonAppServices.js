import axios from 'axios';

export const URL_BASE = "https://pokeapi.co/api/v2/pokemon";

export const getPokemons = async (offset, limit) =>{
    const result = await axios.get(`${URL_BASE}?offset=${offset}&limit=${limit}`);
    return result.data.results;
}

export const getPokemon = async (pokemonId) => {
    const result = await axios.get(`${URL_BASE}/${pokemonId}`);
    return result.data;
}