import { useState } from 'react';
import { useParams } from "react-router-dom";
import { getMovies } from '../data/data.jsx';

import "../css/film.css";

function Film() {

    const { id } = useParams();
    const movies = getMovies();

    const movie = movies.find(m => m.id === Number(id));

    const [isBought, setIsBought] = useState(false);

    const handleBuy = () => {
        setIsBought(true);
    }

    if (!movie) return <h1>For some reason the film was not found...</h1>;
    return(
        <div className='film'>
            <div className='info'>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="movie_poster" /> 
                <h2>{movie.title}</h2>
                <p>{movie.overview}</p>
            </div>
            <div className='buy-tick'>
                {/* <span><b>{movie.price}Kc</b></span> */}
                <button onClick={handleBuy} disabled={isBought}>{isBought ? "Bought!" : "Buy!"}</button>
            </div>
        </div>
    )
}

export default Film;