import { create } from 'zustand';

export const useSearchStore = create((set) => ({
    nameFilm: '',
    searchResults: [],
    draft: '',

    setNameFilm: (value) => set({ nameFilm: value }),
    setSearchResults: (results) => set({ searchResults: results }),
    setDraft: (value) => set({ draft: value }),
}));