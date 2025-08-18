import axios from "axios";
import config from "../configs/config";
import { SuperheroesTypes } from "../types";

export const loadAllSuperheroes = async () => {
    try {
        const response = await axios.get(`${config.BASE_URL}/api/superheroes`);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const loadSuperheroById = async (id: string) => {
    try {
        const response = await axios.get(`${config.BASE_URL}/api/superhero/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const addSuperhero = async (data: SuperheroesTypes.SuperheroPayload) => {
    try {
        const response = await axios.post(`${config.BASE_URL}/api/superhero`, data);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const updateSuperhero = async (data: SuperheroesTypes.SuperheroPayload) => {
    try {
        const response = await axios.put(`${config.BASE_URL}/api/superhero`, data);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const deleteSuperhero = async (id: string) => {
    try {
        const response = await axios.delete(`${config.BASE_URL}/api/superhero/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
};
