import React from "react";
import styled from "styled-components";

export default function Tabs({ highscores, setCurrentTab }) {
  const tabs = Object.keys(highscores);

  return (
    <Ul>
      {tabs.map((element, index) => (
        <li
          key={index}
          onClick={() => {
            setCurrentTab(element);
          }}
        >
          {element}
        </li>
      ))}
    </Ul>
  );
}

const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  li {

  }
`;
