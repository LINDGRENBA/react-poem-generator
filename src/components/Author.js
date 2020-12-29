import React from 'react';
import './Author.css';
import Books from '../images/random-image.jpg'


const Author = ({name, bio}) => {
  return (
    <div className="author">
      <h1>{name}</h1>
      <img src={Books} alt='flowers' />
      <p>{bio}</p>
      <p><span>Photo by <a href="https://unsplash.com/@erol?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Erol Ahmed</a> on <a href="https://unsplash.com/s/photos/poem?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span></p>
    </div>
  );
};

export default Author;