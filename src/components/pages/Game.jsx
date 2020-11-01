import React, { useEffect, useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Counter from "../common/Counter";
import Question from "../common/Question";
import { GameContext } from "../contexts/GameContext";
import Play from "./Play";
import Settings from "./Settings";
import Stats from "./Stats";

export default function Game() {
  const [questions, setQuestions] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [settings, setSettings] = useState({category: "", difficulty: "", timer: "30"});
  const { path } = useRouteMatch();

  // const handleSubmit = () => {
  //   let answer;

  //   if (document.querySelector("input[name=answer]:checked")) {
  //     answer = document.querySelector("input[name=answer]:checked").value;
  //   } else {
  //     answer = "";
  //   }
  //   setAnswers([...answers, answer]);
  //   setCurrentQuestion(currentQuestion + 1);
  //   clearInterval(counter);
  // };

  // const handleStartGame = () => {
  //   fetch("https://opentdb.com/api.php?amount=10")
  //     .then((res) => res.json())
  //     .then((data) => setQuestions(data.results))
  //     .catch((error) => console.error(error));
  // };

  useEffect(() => {
    
  }, [settings])

  return (
    <div>
      <GameContext.Provider value={{settings, setSettings, questions, setQuestions, answers, setAnswers}}>
      <Switch>
        <Route path={`${path}/settings`}>
          <Settings/>
        </Route>
        <Route path={`${path}/play`}>
          <Play/>
        </Route>
        <Route path={`${path}/stats`}>
          <Stats/>
        </Route>
      </Switch>
      </GameContext.Provider>
      {/* <div>
        {questions[currentQuestion] ? (
          <div>
            <Counter key={currentQuestion} setCounter={setCounter} handleSubmit={handleSubmit}/>
            <Question questionData={questions[currentQuestion]} currentQuestion={currentQuestion}/>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        ) : (
          <div>Spelet är över</div>
        )}
        <button onClick={handleStartGame}>Start game</button>
      </div>*/}
      </div> 
  );
}
