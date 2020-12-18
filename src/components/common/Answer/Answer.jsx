import React from "react";
import "./style.css";

export default function Answer({questionData, answer}) {
  return (
    <div className="question-vs-answer">
      <h3 dangerouslySetInnerHTML={{ __html: questionData.question}}></h3>
      <p dangerouslySetInnerHTML={{ __html: `Your answer: ${answer}`}}></p>
      <p dangerouslySetInnerHTML={{ __html: `Correct answer: ${questionData.correct_answer}`}}></p>
    </div>
  );
}
