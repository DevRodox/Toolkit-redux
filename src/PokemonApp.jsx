import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApp = () => {

    const { page, pokemons, isLoading  } = useSelector( state => state.pokemons );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( getPokemons() );
    }, []);

    return(
        <>
            <h1>PokemonApp</h1>
            <hr />
            <ul>
                { 
                    pokemons.map( pokemon => (
                        <h3 key={ pokemon.name } >{ pokemon.name }</h3>
                    ))
                }
            </ul>

            <button
                disabled = { isLoading }
                // onClick={ dispatch( getPokemons( page )) }
            >
                Next
            </button>
        </>
    );
};