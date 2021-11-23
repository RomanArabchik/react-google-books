export const SET_BOOKS = 'SET_BOOKS';
export const SET_QUERY = 'SET_QUERY';
export const SET_CATEGORY = 'SET_CATEGORY';
export const SET_FILTER = 'SET_FILTER';
export const SET_LOADING = 'SET_LOADING';
export const SET_TOTAL = 'SET_TOTAL';
export const SET_ONE_BOOK = 'SET_ONE_BOOK';
export const SET_ERROR = 'SET_ERROR';
export const SET_INDEX = 'SET_INDEX';
export const SET_MORE_BOOKS = 'SET_MORE_BOOKS';
export const SET_DISABLE = 'SET_DISABLE';

export const setBooks = (books) => ({ type: SET_BOOKS, payload: books });
export const setQuery = (query) => ({ type: SET_QUERY, payload: query });
export const setCategory = (category) => ({ type: SET_CATEGORY, payload: category });
export const setFilter = (filter) => ({ type: SET_FILTER, payload: filter });
export const setLoading = (payload) => ({ type: SET_LOADING, payload });
export const setTotal = (total) => ({ type: SET_TOTAL, payload: total });
export const setOneBook = (book) => ({ type: SET_ONE_BOOK, payload: book });
export const setError = (payload) => ({ type: SET_ERROR, payload });
export const setIndex = (index) => ({ type: SET_INDEX, payload: index });
export const setMoreBooks = (moreBooks) => ({ type: SET_MORE_BOOKS, payload: moreBooks });
export const setDisable = (payload) => ({ type: SET_DISABLE, payload });