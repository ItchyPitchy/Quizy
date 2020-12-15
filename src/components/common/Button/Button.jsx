import React from 'react'

export default function Button({text, path, clickHandler}) {
  return (
    <button onClick={() => clickHandler(path)}>{text}</button>
  )
}
