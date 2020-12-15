import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { GameContext } from "../../contexts/GameContext.js";
import firebase from "../../firebase.js";
import HighscoreTable from "../common/HighscoreTable/HighscoreTable.jsx";
import Tabs from "../common/Tabs/Tabs.jsx";

export default function Highscore() {
  const database = firebase.database();
  const { category } = useContext(GameContext);
  const [highscores, setHighscores] = useState({});
  const [currentTab, setCurrentTab] = useState(category);

  useEffect(() => {
    database
      .ref()
      .once("value")
      .then((snapshot) => {
        setHighscores(snapshot.val());
      });
  }, [setHighscores, database]);

  return (
    <Main>
      <div className="table-container">
        {highscores[currentTab] && <HighscoreTable highscores={highscores} currentTab={currentTab} />}
        <Tabs highscores={highscores} setCurrentTab={setCurrentTab} />
      </div>
    </Main>
  );
}

const Main = styled.main`
  .table-container {
    display: grid;
    grid-template: auto / repeat(2, max-content);
    width: min-content;
    margin: 0 auto;
  }
`;