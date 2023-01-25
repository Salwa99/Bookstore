import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const { categories, message } = useSelector((state) => state.categories);
  const [isChecking, setIsChecking] = useState(false);
  const dispatch = useDispatch();

  const handleCheck = () => {
    setIsChecking(true);
    dispatch(checkStatus());
  };

  return (
    <div>
      <button type="button" onClick={handleCheck}>
        {isChecking ? 'Checking...' : 'Check status'}
      </button>
      <div>{categories}</div>
      <div>{message}</div>
    </div>
  );
};

export default Categories;
