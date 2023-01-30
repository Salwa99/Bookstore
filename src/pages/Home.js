import React from 'react';
import BookList from '../components/BookList';
import Form from '../components/Form';

const Home = () => (
  <>
    <div className="main">
      <div>
        <BookList />
      </div>
      <div>
        <Form />
      </div>
    </div>

  </>
);

export default Home;
