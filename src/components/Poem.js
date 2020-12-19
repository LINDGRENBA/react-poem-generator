import React, { useEffect, useState } from 'react';
// import { dotenv } from 'dotenv';
import axios from 'axios';

const Poem = ({ text }) => {
  const [poemTitles, setPoemTitles] = useState('');
  const [currentPoem, setCurrentPoem] = useState('');
  const [poemUrl, setPoemUrl] = useState('');
  const [currentTitle, setCurrentTitle] = useState('');

  useEffect(() => {
    const getPoemTitles = async () => {
      const titleOptions = {
        method: "GET",
        url: "https://pafmon-walt-whitman-poems.p.rapidapi.com/poems/",
        headers: {
          "x-rapidapi-host": "pafmon-walt-whitman-poems.p.rapidapi.com",
          "x-rapidapi-key": process.env.REACT_APP_API_KEY
        }
      }
      const { data } = await axios.request(titleOptions);
      setPoemTitles(data);
    }

    getPoemTitles();
  }, []);

  const onButtonClick = async () => {
    const randomIndex = Math.floor(Math.random() * 407);
    const title = poemTitles[randomIndex];
    setPoemUrl(`https://pafmon-walt-whitman-poems.p.rapidapi.com/poems/${title}`)

    const poemOptions = {
      method: "GET",
      url: poemUrl,
      headers: {
        "x-rapidapi-host": "pafmon-walt-whitman-poems.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_API_KEY
      }
    }
    const { data } = await axios.request(poemOptions);
    setCurrentTitle(data.title);
    setCurrentPoem(data.text);
  }

//   data:
// index: "as-consequent-etc."
// text: "the poem will be here"
// title: 

  console.log(poemTitles);

  return (
    <div>
      <h1>{currentTitle}</h1>
      <p>{currentPoem === '' ? 'Click the "new poem" button to generate a random poem' : currentPoem}</p>
      <button onClick={onButtonClick}  className="ui button">{text}</button>
    </div>
  )
};

export default Poem;