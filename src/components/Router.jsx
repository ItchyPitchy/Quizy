import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { GameContext } from "../contexts/GameContext";
import Home from "./pages/Home";
import Highscore from "./pages/Highscore";
import Play from "./pages/Play";
import Settings from "./pages/Settings";
import Stats from "./pages/Stats";

export default function Router() {
  const [category, setCategory] = useState("Any");
  const [questions, setQuestions] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [settings, setSettings] = useState({category: "", difficulty: "", timer: "30"});

  return (
    <div>
      <GameContext.Provider value={{settings, setSettings, questions, setQuestions, answers, setAnswers, category, setCategory}}>
        <Switch>
          <Route path="/settings">
            <Settings/>
          </Route>
          <Route path="/play">
            <Play/>
          </Route>
          <Route path="/stats">
            <Stats/>
          </Route>
          <Route path="/highscore">
            <Highscore/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </GameContext.Provider>
    </div> 
  );
}
