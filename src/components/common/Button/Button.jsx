import React from 'react';
import "./style.css";

export default function Button({text, path, clickHandler}) {
  return (
    <button onClick={() => clickHandler(path)}>{text}</button>
  )
}
