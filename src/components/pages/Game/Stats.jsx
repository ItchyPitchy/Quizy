import firebase from "../../../firebase.js";
import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { GameContext } from '../../../contexts/GameContext';
import Answer from '../../common/Answer';

export default function Stats() {
  const database = firebase.database();
  const { answers, questions } = useContext(GameContext);
  let score = 0;

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === questions[i].correct_answer) {
      score++;
    }
  }

  useEffect(() => {
    const payload = {
      username: "Bajs",
      score: score,
    }
    database.ref("highscore").push(payload);
  }, [])

  return (
    <div>
      {questions ? questions.map((question, index) => (
        <Answer key={index} questionData={question} answer={answers[index]}/>
      )) : <Redirect to="./settings"/>}
    </div>
  )
}
