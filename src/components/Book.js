import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({
  id, title, author, genre,
}) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeBook(id));
  };

  return (
    <div>
      <div>
        <h4>{genre}</h4>
        <h3>{title}</h3>
        <p>{author}</p>
        <div>
          <button type="submit">Comments</button>
          <button type="submit" onClick={handleRemove}>Remove</button>
          <button type="submit">Edit</button>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
