import React, { useContext, useEffect, useState } from 'react';
import Counter from '../common/Counter';
import Question from '../common/Question';
import { GameContext } from '../contexts/GameContext';

export default function Play() {
  const { settings, questions, setQuestions, answers, setAnswers } = useContext(GameContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [counter, setCounter] = useState();

  const handleSubmit = () => {
    let answer;

    if (document.querySelector("input[name=answer]:checked")) {
      answer = document.querySelector("input[name=answer]:checked").value;
    } else {
      answer = "";
    }
    setAnswers([...answers, answer]);
    setCurrentQuestion(currentQuestion + 1);
    clearInterval(counter);
  };

  useEffect(() => {
    fetch(`https://opentdb.com/api.php?amount=10&difficulty=${settings.difficulty}&category=${settings.category}`)
      .then(res => res.json())
      .then(data => setQuestions(data.results))
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      {questions && (
        <div>
          <Counter key={currentQuestion} setCounter={setCounter} duration={settings.timer} handleSubmit={handleSubmit}/>
          <Question questionData={questions[currentQuestion]} currentQuestion={currentQuestion}/>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  )
}
