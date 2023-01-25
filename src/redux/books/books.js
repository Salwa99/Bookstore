import { v4 } from 'uuid';

const ADD = 'bookstore/books/ADD';
const REMOVE = 'bookstore/books/REMOVE';

// Actions
const addBook = (book) => ({
  type: ADD,
  book,
});

const removeBook = (id) => ({
  type: REMOVE,
  id,
});

// Reducer
const bookReducer = (state = [
  {
    id: v4(), title: 'Oliver Twist', author: 'Charles Dikens', genre: 'sc-fi',
  },
  {
    id: v4(), title: 'The World as Will and Representation', author: 'Arthur Schopenhauer', genre: 'philosophy',
  },
  {
    id: v4(), title: 'Thus Spoke Zarathustra', author: 'Friedrich Nietzsche', genre: 'philosophy',
  },
  {
    id: v4(), title: 'Les Misérables', author: 'Victor Hugo', genre: 'historical fiction',
  },
], action = {}) => {
  switch (action.type) {
    case ADD:
      return [...state, action.book];
    case REMOVE:
      return [...state.filter((book) => book.id !== action.id)];
    default:
      return state;
  }
};

export { addBook, removeBook };
export default bookReducer;
