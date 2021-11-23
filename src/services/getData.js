import axios from 'axios';
import {
  setBooks,
  setDisable,
  setError,
  setLoading,
  setMoreBooks,
  setOneBook,
  setTotal,
} from '../store/actions';

const baseURL = 'https://www.googleapis.com/books/v1/volumes';
const apiKey = 'AIzaSyCfdYGAL3VS3eTzk13AgbMmn0HRkB1G4_A';

export const getBooks = (query, category, filter, startIndex) => {
  return (dispatch) => {
    if (category === 'all') {
      category = '';
    }
    dispatch(setLoading(true));
    axios
      .get(
        `${baseURL}?q=${query}+subject:${category}&maxResults=30&startIndex=${startIndex}&orderBy=${filter}&key=${apiKey}`
      )
      .then((res) => {
        if (res.data.items && res.data.items.length > 0) {
          dispatch(setTotal(res.data.totalItems));
          dispatch(setBooks(res.data.items));
          dispatch(setLoading(false));
          dispatch(setError(false));
        }
        if (res.data.totalItems === 0) {
          dispatch(setTotal(res.data.totalItems));
          dispatch(setLoading(false));
          dispatch(setError(false));
        }
      })
      .catch((err) => {
        dispatch(setError(true));
        console.log(err.response);
      });
  };
};

export const getMoreBooks = (query, category, filter, startIndex) => {
  return (dispatch) => {
    if (category === 'all') {
      category = '';
    }
    dispatch(setDisable(true));
    axios
      .get(
        `${baseURL}?q=${query}+subject:${category}&maxResults=30&startIndex=${startIndex}&orderBy=${filter}&key=${apiKey}`
      )
      .then((res) => {
        if (res.data.items && res.data.items.length > 0) {
          dispatch(setMoreBooks(res.data.items));
          dispatch(setLoading(false));
          dispatch(setDisable(false));
        }
      })
      .catch((err) => {
        dispatch(setError(true));
        console.log(err.response);
      });
  };
};

export const getOneBook = (id) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    axios
      .get(`${baseURL}/${id}?projection=full&key=${apiKey}`)
      .then((res) => {
        dispatch(setOneBook(res.data));
        dispatch(setLoading(false));
        dispatch(setError(false));
      })
      .catch((err) => {
        console.log(err.response);
        dispatch(setError(true));
        dispatch(setLoading(false));
      });
  };
};
