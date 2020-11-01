import React from "react";
import Options from "./Options";

export default function Question({ questionData, currentQuestion }) {
  return (
    <div>
      <h3>{questionData.question}</h3>
      <Options questionData={questionData} currentQuestion={currentQuestion} />
    </div>
  );
}
