import React, { useEffect, useState } from "react";
import Option from "../Option/Option";

export default function Options({ questionData, currentQuestion }) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions(() => {
      const data = [...questionData.incorrect_answers];
      const randNum = Math.floor(Math.random() * options.length + 1);
      data.splice(randNum, 0, questionData.correct_answer);
      return data;
    })
  }, [questionData, options.length])

  return (
    <div>
      {options &&
        options.map((answer, index) => (
          <Option answer={answer} key={`${currentQuestion}${index}`} />
        ))}
    </div>
  );
}
