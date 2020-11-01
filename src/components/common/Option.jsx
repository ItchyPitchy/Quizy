import React from 'react';

export default function Option({answer}) {
  return (
    <div>
      <input type="radio" name="answer" value={answer}/>
      <label htmlFor={answer}>{answer}</label>
    </div>
  )
}
