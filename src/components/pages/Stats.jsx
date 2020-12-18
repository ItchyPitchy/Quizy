import firebase from "../../firebase.js";
import React, { useContext, useEffect, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { GameContext } from '../../contexts/GameContext';
import Answer from '../common/Answer/Answer';
import Button from "../common/Button/Button.jsx";
import { Main } from "../common/Styles/Styles";
import UsernameInput from "../common/UsernameInput/UsernameInput.jsx";

export default function Stats() {
  const database = firebase.database();
  const { answers, questions, category } = useContext(GameContext);
  const history = useHistory();
  const [username, setUsername] = useState(null);
  let score = 0;

  for (let i = 0; i < Math.min(answers.length, questions.length); i++) {
    if (answers[i] === questions[i].correct_answer) {
      score++;
    }
  }

  const handlePublish = (path) => {
    const payload = {
      username: username,
      score: score,
    }
    database.ref(category).push(payload);
    history.push(`./${path}`);
  }

  const handleSkip = (path) => {
    history.push(`./${path}`);
  }

  useEffect(() => {
    
  }, [])

  return (
    <Main>
      <h2>Overview</h2>
      {questions ? questions.map((question, index) => (
        <Answer key={index} questionData={question} answer={answers[index]}/>
      )) : <Redirect to="./settings"/>}
      <UsernameInput username={username} setUsername={setUsername}/>
      <Button text="Publish" path="highscore" clickHandler={handlePublish}/>
      <Button text="Skip" path="highscore" clickHandler={handleSkip}/>
    </Main>
  )
}
