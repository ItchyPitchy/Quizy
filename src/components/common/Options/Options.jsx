import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Option from "../Option/Option";

export default function Options({ questionData, currentQuestion }) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions(() => {
      if (questionData.type !== "boolean") {
        const data = [...questionData.incorrect_answers];
        const randNum = Math.floor(Math.random() * options.length + 1);
        data.splice(randNum, 0, questionData.correct_answer);
        return data;
      } else {
        return ["True", "False"];
      }
      
    })
  }, [questionData, options.length])

  return (
    <OptionsWrapper rowLength={options.length}>
      {options &&
        options.map((answer, index) => (
          <Option answer={answer} key={`${currentQuestion}${index}`} />
        ))}
    </OptionsWrapper>
  );
}

const OptionsWrapper = styled.div`
  display: grid;
  grid-template: repeat(${props => props.rowLength}, 1fr) / auto minmax(50px, auto);
  width: max-content;
  margin: 40px auto;
  gap: 10px;
`;