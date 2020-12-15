import firebase from "../../firebase.js";
import React, { useContext, useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { GameContext } from '../../contexts/GameContext';
import Answer from '../common/Answer/Answer';
import Button from "../common/Button/Button.jsx";

export default function Stats() {
  const database = firebase.database();
  const { answers, questions, category } = useContext(GameContext);
  const history = useHistory();
  const [username, setUsername] = useState(null);
  let score = 0;

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === questions[i].correct_answer) {
      score++;
    }
  }

  const handleClick = (path) => {
    const payload = {
      username: username,
      score: score,
    }
    database.ref(category).push(payload);
    history.push(`./${path}`);
  }

  useEffect(() => {
    
  }, [])

  return (
    <div>
      {questions ? questions.map((question, index) => (
        <Answer key={index} questionData={question} answer={answers[index]}/>
      )) : <Redirect to="./settings"/>}
      <label>Username</label>
      <input onChange={(e) => { setUsername(e.currentTarget.value) }}/>
      <Button text="Publish" path="highscore" clickHandler={handleClick}/>
    </div>
  )
}
