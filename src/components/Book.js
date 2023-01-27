import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

function Book({
  author, title, category, bookId,
}) {
  const dispatch = useDispatch();
  const removeBookAction = () => dispatch(removeBook(bookId));
  return (
    <>
      <div>
        <div>
          <div>
            <h4>
              {category}
            </h4>
            <h3>
              {title}
            </h3>
            <p>
              Author&apos;s
              {author}
            </p>
          </div>
          <div>
            <button
              type="button"
            >
              Comments
            </button>
            <button
              type="button"
              onClick={removeBookAction}
            >
              Remove
            </button>
            <button
              type="button"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  bookId: PropTypes.string.isRequired,
};

export default Book;
