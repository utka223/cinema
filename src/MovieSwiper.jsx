import { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
 
import "./movieswiper.css";
// импорт стилей ОБЯЗАТЕЛЕН
import "swiper/css";
import "swiper/css/navigation";


function MovieSwiper() {

    const [movies, setMovies] = useState([]);

    const API_KEY = import.meta.env.VITE_TMDB_KEY;

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
        .then(res => res.json())
        .then(data => setMovies(data.results));
    }, []);

    const randomTen = () => {
      const num = Math.floor(Math.random() * (500 - 250 + 10)) + 250;
      return Math.round(num / 10) * 10;
    }
    const prices = movies.map(() => randomTen());

    return(
        <>
            <Swiper id='parent'
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={4}
                    navigation={true}
                    loop={true}
            >

                {movies.map((movie, index) => (
                <SwiperSlide key={movie.id} id='child'>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie_poster" />
                    <h2>{movie.title}</h2>
                    <div>
                    <span><b>{prices[index]}Kc</b></span>
                    <button>Buy!</button>
                    </div>
                </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default MovieSwiper;