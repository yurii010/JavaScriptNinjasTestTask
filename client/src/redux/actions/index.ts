import * as app from "../reducers/appSlice";
import * as superheroesActions from "./superheroesActions";

export const actions = {
    app,
    superheroes: superheroesActions,
};
