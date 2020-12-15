import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../common/Button/Button'

export default function Home() {
  const history = useHistory()
  
  const handleClick = (path) => {
    history.push(`./${path}`)
  }

  return (
    <Main>
      <h1>Quizy</h1>
      <Button text="Play" path="settings" clickHandler={handleClick}/>
      <Button text="Instructions" path="instructions" clickHandler={handleClick}/>
      <Button text="Highscore" path="highscore" clickHandler={handleClick}/>
    </Main>
  )
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 160px);
  max-width: 500px;
  padding: 80px;
  margin: 0 auto;

  
`;