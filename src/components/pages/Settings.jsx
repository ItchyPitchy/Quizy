import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { GameContext } from "../../contexts/GameContext";
import { Main } from "../common/Styles/Styles";

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
    setCategory(selectedCategory.text);
  }

  useEffect(() => {
    fetch("https://opentdb.com/api_category.php")
      .then((res) => res.json())
      .then((data) => setCategories(data.trivia_categories))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Main>
      <Form action="./play" onSubmit={(e) => handleSubmit(e)}>
        <div className="input-container">
          <label htmlFor="category-select">Select Category :</label>
          <select onChange={changeCategory} name="category" id="category-select">
            <option value="">Any</option>
            {categories.map((category, index) => (
              <option key={index} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
          <label htmlFor="difficulty-select">Select Difficulty :</label>
          <select name="difficulty" id="difficulty-select">
            <option value="">Any Difficulty</option>
            {difficulties.map((difficulty, index) => (
              <option key={index} value={difficulty.id}>
                {difficulty.name}
              </option>
            ))}
          </select>
          <label htmlFor="timer">Timer :</label>
          <div className="range-wrapper">
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
          </div>
        </div>
        <button>Start Game</button>
      </Form>
    </Main>
  );
}

const Form = styled.form`
  .input-container {
    display: grid;
    grid-template: repeat(3, minmax(30px, 1fr)) / auto 1fr;
    grid-gap: 1em;
    margin-bottom: 80px;

    label {
      display: flex;
      align-items: center;
      text-align: left;
      font-size: 16px;
      font-weight: 500;
      white-space: nowrap;
    }

    select {
      display: flex;
      align-items: center;
      font-family: 'Roboto';
      border: 2px solid black;
      padding: 0 4px;
      border-radius: 10px;

      &:active {
        border-bottom: 0;
        border-radius: 10px 10px 0 0;
      }
    }

    .range-wrapper {
      display: flex;
      align-items: center;
      
      input {
        flex-grow: 1;
      }
    }

    input:focus, select:focus {
      outline: none;
    }
  }
  
`;