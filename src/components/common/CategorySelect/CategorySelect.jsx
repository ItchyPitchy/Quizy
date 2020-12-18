import React, { useContext } from "react";
import styled from "styled-components";
import "./style.css";
export default function CategorySelect({ categories, currentTab, changeCategory }) {
  return (
    <select className="category-select" onChange={changeCategory} name="category" id="category-select">
      <option value="">Any</option>
      {categories.map((element, index) => (
        <option
          selected={element.name === currentTab ? true : false}
          key={index}
          value={element.id}
        >
          {element.name}
        </option>
      ))}
    </select>
  );
}

const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  li {
  }
`;
