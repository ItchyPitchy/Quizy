import React, { useEffect, useState } from "react";
import Option from "./Option";

export default function Options({questionData, currentQuestion}) {
  const [options, setOptions] = useState([]);

  // const shuffleOptions = () => {
  //   const temp = [...question.incorrect_answers];
  //   const randNum = Math.floor(Math.random() * options.length + 1);
  //   temp.splice(randNum, 0, question.correct_answer);
  // }

  useEffect(() => {
    setOptions(prevState => {
      const temp = [...questionData.incorrect_answers];
      const randNum = Math.floor(Math.random() * options.length + 1);
      temp.splice(randNum, 0, questionData.correct_answer);
      return temp;
    })
  }, [questionData])

  return (
    <div>
      {options &&
        options.map((answer, index) => (
          <Option answer={answer} key={`${currentQuestion}${index}`} />
        ))}
    </div>
  );
}
