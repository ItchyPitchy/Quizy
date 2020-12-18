import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { GameContext } from "../../contexts/GameContext";
import Counter from "../common/Counter/Counter";
import Question from "../common/Question/Question";
import { Main } from "../common/Styles/Styles";

export default function Play() {
  const { settings, questions, setQuestions, answers, setAnswers } = useContext(
    GameContext
  );
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [counter, setCounter] = useState();

  const handleSubmit = (timesUp = false) => {
    const selected = document.querySelector("input[name=answer]:checked");

    if (selected || timesUp) {
      const answer = selected ? selected.value : "";
      setAnswers([...answers, answer]);
      setCurrentQuestion(currentQuestion + 1);
      clearInterval(counter);
    }
  };

  useEffect(() => {
    fetch(
      `https://opentdb.com/api.php?amount=10&difficulty=${settings.difficulty}&category=${settings.category}`
    )
      .then((res) => res.json())
      .then((data) => setQuestions(data.results))
      .catch((err) => console.error(err));
  }, [settings, setQuestions]);

  return (
    <Main>
      {questions && (
        <div>
          {currentQuestion === questions.length ? (
            <Redirect to="./stats" />
          ) : (
            <div>
              <Counter
                key={currentQuestion}
                setCounter={setCounter}
                duration={settings.timer}
                handleSubmit={handleSubmit}
              />
              <Question
                questionData={questions[currentQuestion]}
                currentQuestion={currentQuestion}
              />
              <button onClick={() => handleSubmit()}>Submit</button>
            </div>
          )}
        </div>
      )}
    </Main>
  );
}
