import React from "react";
import Options from "../Options/Options";
import "./style.css";

export default function Question({ questionData, currentQuestion }) {
  return (
    <div>
      <h3 className="question" dangerouslySetInnerHTML={{ __html: questionData.question}}></h3>
      <Options questionData={questionData} currentQuestion={currentQuestion} />
    </div>
  );
}