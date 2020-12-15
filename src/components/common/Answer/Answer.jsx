import React from "react";

export default function Answer({questionData, answer}) {
  return (
    <div>
      <p>{questionData.question}</p>
      <p>Your answer: {answer}</p>
      <p>Correct answer: {questionData.correct_answer}</p>
    </div>
  );
}
