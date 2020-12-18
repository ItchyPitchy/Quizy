import React from 'react';
import "./style.css";

export default function Option({answer}) {
  return (
    <>
      <input className="option-input" type="radio" name="answer" value={answer}/>
      <label className="option-label" htmlFor={answer} dangerouslySetInnerHTML={{ __html: answer}}></label>
    </>
  )
}
