import React from 'react';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import ReactStars from 'react-rating-stars-component';

export const Rating = ({ setRating, rating = null, edit = true }) => {
  const options = {
    size: 35,
    count: 5,
    color: 'black',
    activeColor: 'blue',
    value: rating,
    a11y: true,
    isHalf: true,
    emptyIcon: <FaRegStar />,
    halfIcon: <FaStarHalfAlt />,
    filledIcon: <FaStar />,
    edit: edit,
    onChange: (newValue) => {
      if (!edit) return;
      //   console.log(`Example 2: new value is ${newValue}`);
      setRating(newValue);
      console.log(rating);
    },
  };

  return <ReactStars {...options} />;
};
