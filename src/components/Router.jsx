import React from "react";
import { Route, Switch } from "react-router-dom";
import Game from "./pages/Game/";
import Login from "./pages/Login";

export default function Router() {
  return (
    <Switch>
      <Route path="/game">
        <Game />
      </Route>
      <Route path="/login">
        <Login/>
      </Route>
      <Route path="/"></Route>
    </Switch>
  );
}
