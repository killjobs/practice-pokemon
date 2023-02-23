import React, {useCallback , useState, useEffect, useRef, useMemo} from "react";
import SimpleCardComponent from './SimpleCardComponent.js';
import { Link } from 'react-router-dom';
import { getPokemons } from "../Services/pokemonAppServices.js";
import useNearScreen from "../Hooks/UseNearScreen.js";
import debounce from "just-debounce-it";

const ListPokemonComponent = () =>{
    const INITIAL_PAGE = 0;
    const DEFAULT_OFFSET = 20;
    const externalRef = useRef();
    const {isNearScreen} = useNearScreen({
            externalRef:externalRef,
            once: false
        });
    const [listPokemons, UpdateListPokemons] = useState(null);
    const [listAuxPokemon, UpdateListAuxPokemon] = useState(null);
    const [searchPokemon, setsearchPokemon] = useState('');
    const [page, setPage] = useState(INITIAL_PAGE);
    
    const totalPokemon = useMemo( () => {
        return listPokemons
    },[listAuxPokemon]);

    console.log("useMemo: ",totalPokemon);

    let auxPokemon = [];

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
    }, [page]);
    
    /*const UpdatePage = () => {
        setPage(page + 1);
    }*/

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

    const debounceHandleNextPage = useCallback(debounce(
        () => setPage(page => page + 1), 200
    ),[setPage]);

    useEffect(function (){
        if(isNearScreen) debounceHandleNextPage()
    },[debounceHandleNextPage,isNearScreen])

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
        <div ref={externalRef}></div>
        {/*<button className="nextSection" onClick={UpdatePage}>CARGAR SIGUIENTES</button>*/}
        </>
    );
};

export default ListPokemonComponent;