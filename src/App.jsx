import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import Layout from './Layout.jsx';
import MovieSwiper from './pages/MovieSwiper.jsx';
import Film from './pages/Film.jsx';
import SearchResultFilms from './pages/SearchResultFilms.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MovieSwiper />} />
            <Route path="film/:id" element={<Film />} />
            <Route path="search/:query" element={<SearchResultFilms />} />
          </Route>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App