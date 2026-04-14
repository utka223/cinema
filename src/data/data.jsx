import { useEffect, useState } from 'react';

export function getMovies() {
    const [movies, setMovies] = useState([]);

    const API_KEY = import.meta.env.VITE_TMDB_KEY;

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
        .then(res => res.json())
        .then(data => setMovies(data.results));
    }, []);

    return movies;
}