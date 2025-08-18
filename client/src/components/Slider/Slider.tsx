import "swiper/css";
import React from "react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Slide from "../Slide/Slide";
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { SuperheroesTypes } from "../../types";

type SliderProps = {
    superheroes: SuperheroesTypes.Superhero[];
};

export default function Slider({ superheroes }: SliderProps) {
    const navigate = useNavigate();

    return (
        <Swiper
            slidesPerView={3}
            loop={true}
            direction={"horizontal"}
            mousewheel={true}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Navigation]}
            breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }}
            className="mySwiper"
        >
            {superheroes.length === 0 ? (
                <div className="text-white text-2xl font-bold">No superheroes found</div>
            ) : (
                superheroes.map((superhero: SuperheroesTypes.Superhero, index: number) => (
                    <SwiperSlide key={index}>
                        <div onClick={() => navigate(`/superhero/${superhero.id}`)}>
                            <Slide superhero={superhero} />
                        </div>
                    </SwiperSlide>
                ))
            )}
        </Swiper>
    );
}
