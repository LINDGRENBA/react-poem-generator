import React, { useState } from 'react';
import axios from 'axios';

const Poem = ({ text }) => {
  const [poem, setPoem] = useState('Click the "new poem" button to generate a poem');




  return (
    <div>
      <p>{poem}</p>
      <button className="ui button">{text}</button>
    </div>
  )
};

export default Poem;