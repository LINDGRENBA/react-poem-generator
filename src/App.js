import React from 'react';
import './App.css';
import Poem from './components/Poem';
import Author from './components/Author';

const App = () => {

  const whitmanBio = "A famous poet and essayist known for poems such as 'Song of Myself' and 'I Sing the Body Electric. (1819 - 1892)"

  return (
    <div className="page">
      <Author name="Walt Whitman" bio={whitmanBio}/>
      <Poem text='new poem' />
    </div>
  );
};

export default App;