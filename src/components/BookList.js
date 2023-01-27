import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadBooks } from '../redux/books/books';
import Book from './Book';

const BookList = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBooks());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div>
        {Object.keys(books).length > 0 && Object.keys(books).map((id) => (
          <div key={id}>
            <Book
              author={books[id] && books[id][0] && books[id][0].author}
              title={books[id][0].title}
              category={books[id][0].category}
              bookId={id}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default BookList;
