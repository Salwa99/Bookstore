import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';
import CircelProgress from './circleProgress';

function Book({
  author, title, category, bookId,
}) {
  const dispatch = useDispatch();
  const [randomPercentage] = useState(
    Math.floor(Math.random() * 90 + 10),
  );
  const removeBookAction = () => dispatch(removeBook(bookId));
  return (
    <>
      <div className="main-container">
        <div className="info">
          <div className="info1">
            <div>
              <h4 className="category">{category}</h4>
              <h3 className="title">{title}</h3>
              <p className="author">{author}</p>
            </div>
            <div className="buttons">
              <button type="button">Comments</button>
              <button type="button" onClick={removeBookAction}>
                Remove
              </button>
              <button type="button">Edit</button>
            </div>
          </div>
          <div className="main-circle">
            <CircelProgress percentage={randomPercentage} />
            <div>
              <h2>
                {randomPercentage}
                <span>%</span>
              </h2>
              <p>Completed</p>
            </div>
          </div>
        </div>
        <div className="info2">
          <p className="current">CURRENT CHAPTER</p>
          <p className="chapter">Chapter 17</p>
          <button type="button" className="update">
            {' '}
            UPDATE PROGRESS
          </button>
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
