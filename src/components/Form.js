import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBook } from '../redux/books/books';

function Form() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('Fiction');

  const updateTitle = (e) => setTitle(e.target.value);
  const updateAuthor = (e) => setAuthor(e.target.value);
  const updateCategory = (e) => setCategory(e.target.value);

  const addNewBook = (e) => {
    e.preventDefault();
    if (title && author && category) {
      dispatch(createBook({
        title,
        author,
        category,
      }));
      setTitle('');
      setAuthor('');
      setCategory('');
    }
  };

  return (
    <div className="main-container2">
      <h2 className="add-new">ADD NEW BOOK</h2>
      <form onSubmit={addNewBook}>
        <input type="text" placeholder="Book title" onChange={updateTitle} value={title} />
        <input type="text" placeholder="Add author" onChange={updateAuthor} value={author} />
        <select onChange={updateCategory} value={category}>
          <option value="Fiction">Fiction</option>
          <option value="Horror">Horror</option>
          <option value="History">History</option>
          <option value="Philosophy">Philosophy</option>
          <option value="Computer-Science">Computer Science</option>
          <option value="Astrology">Astrology</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Biology">Biology</option>
          <option value="Physics">Physics</option>
          <option value="Biography">Biography</option>
        </select>
        <button type="submit" className="addBtn">ADD BOOK</button>
      </form>
    </div>
  );
}

export default Form;
