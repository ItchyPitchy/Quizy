import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../common/Button/Button';
import { Main } from "../common/Styles/Styles";

export default function Home() {
  const history = useHistory()
  
  const handleClick = (path) => {
    history.push(`./${path}`)
  }

  return (
    <Main>
      <h1>Quizy</h1>
      <Button text="Play" path="settings" clickHandler={handleClick}/>
      {/* <Button text="Instructions" path="instructions" clickHandler={handleClick}/> */}
      <Button text="Highscore" path="highscore" clickHandler={handleClick}/>
    </Main>
  )
}