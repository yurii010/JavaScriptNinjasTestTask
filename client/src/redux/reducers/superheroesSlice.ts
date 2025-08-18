import { createSlice } from "@reduxjs/toolkit";
import { actions } from "../actions";
import { SuperheroesTypes } from "../../types";

type superheroesState = {
    superheroes: SuperheroesTypes.Superhero[];
    superhero: SuperheroesTypes.Superhero | null;
};

const initialState = {
    superheroes: [],
    superhero: null,
} as superheroesState;

const superheroesSlice = createSlice({
    name: "superheroes",
    initialState,
    reducers: {
        clearSuperhero: (state) => {
            state.superhero = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(actions.superheroes.loadAllSuperheroes.fulfilled, (state, action) => {
            state.superheroes = action.payload;
        });
        builder.addCase(actions.superheroes.loadSuperhero.fulfilled, (state, action) => {
            if (action.payload.length === 0) {
                state.superhero = null;
            } else {
                state.superhero = action.payload;
            }
        });
        builder.addCase(actions.superheroes.deleteSuperhero.fulfilled, (state, action) => {
            state.superheroes = state.superheroes.filter((superhero) => superhero.id !== action.payload);
        });
    },
});

export const { clearSuperhero } = superheroesSlice.actions;
export default superheroesSlice.reducer;
