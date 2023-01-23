import React from 'react';

const Form = () => (
  <div>
    <form>
      <input type="text" name="title" id="title" placeholder="Add Book Title" />
      <select name="author" id="author">
        <option value="shakespear">Arthur Schopenhauer</option>
        <option value="arthur-c-d">Charles Dickens</option>
        <option value="jk-rowling">JK Rowling</option>
        <option value="jane-austin">Mary Shelley</option>
      </select>
      <button type="button">Add Book</button>
    </form>
  </div>
);

export default Form;