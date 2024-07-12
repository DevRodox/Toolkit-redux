import { setPokemons, startLoadingPokemons } from './pokemonSlice';


export const getPokemons = ( page = 0 ) => {
    return async( dispatch, getState ) => {
        dispatch( startLoadingPokemons() );

        // TODO: Realizar peticion http

        // dispatch( setPokemons() );
    }
    // const url = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page }`
};