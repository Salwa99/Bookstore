import { createReducer } from '@reduxjs/toolkit';

const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

const addBook = (book) => ({
  type: ADD,
  book,
});

const removeBook = (book) => ({
  type: REMOVE,
  book,
});

const bookReducer = createReducer([], {
  [ADD]: (state, action) => {
    state.push(action.book);
  },

  [REMOVE]: (state, action) => {
    state.filter((book) => book.id !== action.book.id);
  },
});

export { addBook, removeBook };
export default bookReducer;
