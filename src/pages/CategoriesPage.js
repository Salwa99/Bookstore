import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';
import underConstruction from '../assets/underConstruction.jpg';

const Categories = () => {
  const { categories, message } = useSelector((state) => state.categories);
  const [isChecking, setIsChecking] = useState(false);
  const dispatch = useDispatch();

  const handleCheck = () => {
    setIsChecking(true);
    dispatch(checkStatus());
  };

  return (
    <div className="construction-container">
      <div className="under-construction" />
      <img src={underConstruction} alt="under condtructor" />
      <button type="button" onClick={handleCheck}>
        {isChecking ? 'Checking...' : 'Check status'}
      </button>
      <div><p>{categories}</p></div>
      <div><p>{message}</p></div>
    </div>
  );
};

export default Categories;
