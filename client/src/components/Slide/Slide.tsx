import React from "react";
import { SuperheroesTypes } from "../../types";

type SlideProps = {
    superhero: SuperheroesTypes.Superhero;
};

export default function Slide({ superhero }: SlideProps) {
    return (
        <div className="flex flex-col items-center justify-center bg-black bg-opacity-70 hover:bg-opacity-80 transition duration-300 rounded-xl overflow-hidden shadow-lg">
            <img
                className="w-full max-w-[500px] h-auto aspect-square object-cover"
                src={superhero.image}
                alt={superhero.nickname}
            />
            <div className="w-full text-center py-4">
                <h2 className="text-xl font-bold text-white">{superhero.nickname}</h2>
            </div>
        </div>
    );
}
