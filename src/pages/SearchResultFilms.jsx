import { useParams } from 'react-router-dom';
import { useSearchStore } from '../store/searchStore';
import { useEffect } from 'react';

import '../css/SRFilm.css';

function SearchResultFilms() {
    const { setNameFilm, searchResults, nameFilm, setSearchResults } = useSearchStore();

    const API_KEY = import.meta.env.VITE_TMDB_KEY;

    const { query } = useParams();

    useEffect(() => {
        setNameFilm(query);

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`)
            .then(res => res.json())
            .then(data => setSearchResults(data.results || []))
    }, [query]);

    return (
        <div className="search-results">
            <h1>Search Results for "{nameFilm}"</h1>
            <div className="results-list">
                {searchResults.map((movie) => (
                    <div key={movie.id} className="result-item">
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                        <span>{movie.title}</span>
                        <button onClick={() => window.open("/film/" + movie.id, "_blank")}>View Details</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default SearchResultFilms;