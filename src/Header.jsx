import { useEffect, useState } from 'react';
import { useSearchStore } from './store/searchStore';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

    const { nameFilm, setNameFilm, setSearchResults, draft, setDraft } = useSearchStore();

    function handleInputChange(event) {
        setDraft(event.target.value);
    }

    function handleSearch() {
        const query = draft.trim();

        if (!query) return;

        setNameFilm(query);
        navigate(`/search/${query}`);
    }

    return (
      <header>
          <div className='logo'><a href="/"><h1>Cinema</h1></a></div>
          {/* <span>
              <ul>
                  <li><a href="/">Home</a></li>
              </ul>
          </span> */}
          <div className='search'><input type="text" placeholder="Search..." value={draft} onChange={handleInputChange} /><button onClick={handleSearch} ><i className="bx bx-search bx-flip-horizontal" /></button></div>
      </header>
    );
}

export default Header;