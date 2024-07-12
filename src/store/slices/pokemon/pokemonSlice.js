
import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page: 0,
        pokemons: [],
        isLoagind: false,
    },
    reducers: {
        startLoadingPokemons: (state, /* action */ ) => {
            state.isLoagind = true; 
        },
        setPokemons: (state, action) => {
            console.log(action);
        }
    }
});


export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;