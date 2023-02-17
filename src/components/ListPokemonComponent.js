import React, {useState, useEffect, useRef} from "react";
import SimpleCardComponent from './SimpleCardComponent.js';
import { Link } from 'react-router-dom';
import { getPokemons } from "../Services/pokemonAppServices.js";

const ListPokemonComponent = () =>{
    const INITIAL_PAGE = 0;
    const DEFAULT_OFFSET = 20;
    const [listPokemons, UpdateListPokemons] = useState(null);
    const [listAuxPokemon, UpdateListAuxPokemon] = useState(null);
    const [searchPokemon, setsearchPokemon] = useState('');
    const [page, setPage] = useState(INITIAL_PAGE);
    const finalElementOnPage = useRef(null);
    let searchValue = useRef(null);
    let auxPokemon = [];
    const observerPokemon = new IntersectionObserver((entry, observer)=>{
        console.log(entry);
    },{
        root:null,
        rootMargin: '0px 0px 0px 0px',
        threshold: 1.0
    });

    const UpdatePokemons = () =>{
        const offset = page * DEFAULT_OFFSET;
        
        getPokemons(offset,DEFAULT_OFFSET).then(res =>{
            listPokemons === null ? auxPokemon = res : auxPokemon = [...listAuxPokemon,...res];
            UpdateListPokemons(auxPokemon);
            UpdateListAuxPokemon(auxPokemon);
        });
    };
    
    useEffect(()=>{
        UpdatePokemons();
        setsearchPokemon('');
        //if(finalElementOnPage.current) observerPokemon.observe(finalElementOnPage);
    }, [page]);
    
    const UpdatePage = () => {
        setPage(page + 1);
    }

    const SearchPokemon = (e) => {
        setsearchPokemon(e.target.value);
        let newListPokemon = listAuxPokemon.filter(p => p.name.includes(e.target.value));
        if (newListPokemon.lenght === 0){
            UpdateListPokemons(auxPokemon);
        }else{
            UpdateListPokemons(newListPokemon);
        }
        console.log(newListPokemon);
        console.log(listAuxPokemon);
    }

    if(!listPokemons) return null;

    return(
        <>
        <h1 className='App_h1'>Pokedex</h1>
        <form>
            <input type="text" 
                value={searchPokemon}
                onChange={SearchPokemon}
                placeholder="Busca un pokemon"/>
        </form>
        
        {
            listPokemons.map((results) =>{
                const urlSplit = results.url.split("/");
                const pokemonId = urlSplit[6];
                return(
                    <Link to ={`/pokemon/${pokemonId}`}
                    key={pokemonId}>
                        <SimpleCardComponent
                        pokemonName={results.name}
                        pokemonId={pokemonId}/>
                    </Link>
                    
                );
            }
            
        )}
        <div id='visor' ref={finalElementOnPage}></div>
        <button className="nextSection" onClick={UpdatePage}>CARGAR SIGUIENTES</button>
        </>
    );
};

export default ListPokemonComponent;