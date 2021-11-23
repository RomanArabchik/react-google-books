import {
  SET_BOOKS,
  SET_CATEGORY,
  SET_DISABLE,
  SET_ERROR,
  SET_FILTER,
  SET_INDEX,
  SET_LOADING,
  SET_MORE_BOOKS,
  SET_ONE_BOOK,
  SET_QUERY,
  SET_TOTAL,
} from './actions';

const initialState = {
  books: [],
  query: '',
  category: 'all',
  filter: 'relevance',
  startIndex: 30,
  loading: false,
  total: '',
  oneBook: {},
  error: false,
  disable: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKS:
      return { ...state, books: action.payload };
    case SET_QUERY:
      return { ...state, query: action.payload };
    case SET_CATEGORY:
      return { ...state, category: action.payload };
    case SET_FILTER:
      return { ...state, filter: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_TOTAL:
      return { ...state, total: action.payload };
    case SET_ONE_BOOK:
      return { ...state, oneBook: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    case SET_INDEX:
      return { ...state, startIndex: action.payload };
    case SET_MORE_BOOKS:
      return { ...state, books: [...state.books, ...action.payload] };
      case SET_DISABLE:
        return { ...state, disable: action.payload };

    default:
      return state;
  }
};