import React, { useContext, useEffect, useState } from "react";
import { GameContext } from "../../contexts/GameContext.js";
import firebase from "../../firebase.js";
import HighscoreTable from "../common/HighscoreTable/HighscoreTable.jsx";
import Tabs from "../common/CategorySelect/CategorySelect.jsx";
import { Main } from "../common/Styles/Styles";
import CategorySelect from "../common/CategorySelect/CategorySelect.jsx";

export default function Highscore() {
  const database = firebase.database();
  const { category } = useContext(GameContext);
  const [highscores, setHighscores] = useState({});
  const [currentTab, setCurrentTab] = useState(category);
  const [categories, setCategories] = useState(null);

  const changeCategory = (e) => {
    const selectedCategory = e.target.options[e.target.selectedIndex];
    setCurrentTab(selectedCategory.text);
  }

  useEffect(() => {
    fetch("https://opentdb.com/api_category.php")
      .then((res) => res.json())
      .then((data) => setCategories(data.trivia_categories))
      .catch((err) => console.error(err));
  }, []);

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
      <h2>Highscore</h2>
      {categories && <CategorySelect categories={categories} currentTab={currentTab} changeCategory={changeCategory}/>}
      {highscores[currentTab] ? <HighscoreTable highscores={highscores} currentTab={currentTab} /> : <i>Kategorin saknar resultat</i>}
      {/* <Tabs highscores={highscores} setCurrentTab={setCurrentTab} /> */}
    </Main>
  );
}

// const Main = styled.main`
//   .table-container {
//     display: grid;
//     grid-template: auto / repeat(2, max-content);
//     width: min-content;
//     margin: 0 auto;
//   }
// `;