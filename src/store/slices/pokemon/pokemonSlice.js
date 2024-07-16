
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
            state.isLoagind = false; 
            state.page = action.payload.page;
            state.pokemons = action.payload.pokemons;
        }
    }
});


export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;