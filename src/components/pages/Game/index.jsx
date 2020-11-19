import React, { useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { GameContext } from "../../../contexts/GameContext";
import Highscore from "./Highscore";
import Play from "./Play";
import Settings from "./Settings";
import Stats from "./Stats";

export default function Game() {
  const [questions, setQuestions] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [settings, setSettings] = useState({category: "", difficulty: "", timer: "30"});
  const { path } = useRouteMatch();

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
          <Route path={`${path}/highscore`}>
            <Highscore/>
          </Route>
        </Switch>
      </GameContext.Provider>
    </div> 
  );
}
