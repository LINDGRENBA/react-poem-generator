import React, { useState } from 'react';
import axios from 'axios';

const Poem = ({ text }) => {
  const [poem, setPoem] = useState('poem here');




  return (
    <div>
      <p>{poem}</p>
      <button>{text}</button>
    </div>
  )
};

export default Poem;