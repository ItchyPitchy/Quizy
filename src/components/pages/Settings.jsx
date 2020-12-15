import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { GameContext } from "../../contexts/GameContext";

export default function Settings() {
  const { setSettings, setCategory } = useContext(GameContext);
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const [timer, setTimer] = useState(30);
  const difficulties = [
    { id: "easy", name: "Baby" },
    { id: "medium", name: "Kid" },
    { id: "hard", name: "Adult" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {};

    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }

    setSettings(data);
    history.push("./play");
  };

  const changeCategory = (e) => {
    const selectedCategory = e.target.options[e.target.selectedIndex];
    setCategory(selectedCategory.text.toLowerCase());
  }

  useEffect(() => {
    fetch("https://opentdb.com/api_category.php")
      .then((res) => res.json())
      .then((data) => setCategories(data.trivia_categories))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <form action="./play" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="category-select">Select Category:</label>
        <select onChange={changeCategory} name="category" id="category-select">
          <option value="">Any</option>
          {categories.map((category, index) => (
            <option key={index} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <label htmlFor="difficulty-select">Select Difficulty:</label>
        <select name="difficulty" id="difficulty-select">
          <option value="">Any Difficulty</option>
          {difficulties.map((difficulty, index) => (
            <option key={index} value={difficulty.id}>
              {difficulty.name}
            </option>
          ))}
        </select>
        <label htmlFor="timer">Timer:</label>
        <input
          type="range"
          id="timer"
          name="timer"
          min="10"
          max="50"
          value={timer}
          onInput={(e) => setTimer(e.currentTarget.value)}
        />
        <span>{timer}sec</span>
        <button>Start Game</button>
      </form>
    </div>
  );
}
