import { api } from "../../api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { SuperheroesTypes } from "../../types";

export const loadAllSuperheroes = createAsyncThunk("superheroes/loadAllSuperheroes", async () => {
    const response = await api.superheroesApi.loadAllSuperheroes();
    return response;
});

export const loadSuperhero = createAsyncThunk("superheroes/loadSuperhero", async (id: string) => {
    const response = await api.superheroesApi.loadSuperheroById(id);
    return response;
});

export const addSuperhero = createAsyncThunk("superheroes/addSuperhero", async (data: SuperheroesTypes.SuperheroPayload) => {
    const response = await api.superheroesApi.addSuperhero(data);
    return response;
});

export const updateSuperhero = createAsyncThunk(
    "superheroes/updateSuperhero",
    async (data: SuperheroesTypes.SuperheroPayload) => {
        const response = await api.superheroesApi.updateSuperhero(data);
        return response;
    }
);

export const deleteSuperhero = createAsyncThunk("superheroes/deleteSuperhero", async (id: string) => {
    await api.superheroesApi.deleteSuperhero(id);
    return Number(id);
});
