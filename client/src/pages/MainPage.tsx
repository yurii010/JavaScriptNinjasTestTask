import React, { useEffect } from "react";
import { actions } from "../redux/actions";
import Slider from "../components/Slider/Slider";
import { RootState, useDispatch, useSelector } from "../redux/store/store";
import Footer from "../components/Footer/Footer";
import { SuperheroesTypes } from "../types";

const MainPage = () => {
    const dispatch = useDispatch();
    const superheroes: SuperheroesTypes.Superhero[] = useSelector((state: RootState) => state.superheroes.superheroes);

    useEffect(() => {
        dispatch(actions.superheroes.loadAllSuperheroes());
    }, [dispatch]);

    return (
        <div className="min-h-screen w-screen flex flex-col">
            <div className="flex-1 w-full flex items-center justify-center">
                <div className="w-full max-w-7xl text-center">
                    <Slider superheroes={superheroes} />
                </div>
            </div>
            <div className="w-full flex justify-center">
                <Footer />
            </div>
        </div>
    );
};

export default MainPage;
