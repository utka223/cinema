import { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Location from './Location.jsx';
 
import "../styles/MovieSwiper.scss";
// импорт стилей ОБЯЗАТЕЛЕН
import "swiper/css";
import "swiper/css/navigation";

import { getMovies } from '../data/data.jsx';

function MovieSwiper() {
    const movies = getMovies();

    const randomTen = () => {
      const num = Math.floor(Math.random() * (500 - 250 + 10)) + 250;
      return Math.round(num / 10) * 10;
    }
    const prices = movies.map(() => randomTen());

    return(
        <>
            <div className='slider'>
                <button className='prevBtn'><i className="bx bx-caret-left" /></button>
            <Swiper id='parent'
                    modules={[Navigation]}
                    spaceBetween={20}
                    breakpoints={{
                        0: {slidesPerView: 1},
                        768: {slidesPerView: 2},
                        1024: {slidesPerView: 3},
                    }}
                    navigation={{
                        nextEl: ".nextBtn",
                        prevEl: ".prevBtn"
                    }}
                    loop={true}
            >
                {movies.map((movie, index) => (
                <SwiperSlide key={movie.id} className='child'>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie_poster" />
                    <p>{movie.title}</p>
                    <div className="info-price">
                      <button onClick={() => window.open("/film/" + movie.id, "_blank")}>Buy</button>
                      <span><b>{prices[index]} Kc</b></span>      
                    </div>
                </SwiperSlide>
                ))}
            </Swiper>
            <button className='nextBtn'><i className="bx bx-caret-right" /></button>
            </div>
            <Location />
        </>
    )
}

export default MovieSwiper;
