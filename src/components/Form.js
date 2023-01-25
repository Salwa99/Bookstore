import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { addBook } from '../redux/books/books';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = {
      id: v4(),
      title,
      author,
    };

    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
    // setGenre('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book's Title"
          id="title"
          name="title"
          onChange={(event) => setTitle(event.target.value)}
          value={title}
        />
        <input
          type="text"
          placeholder="Author's Name"
          name="author"
          id="author"
          onChange={(event) => setAuthor(event.target.value)}
          value={author}
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default Form;
