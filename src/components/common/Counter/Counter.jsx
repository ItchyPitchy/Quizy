import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function Counter ({setCounter, duration, handleSubmit}) {
  const [count, setCount] = useState(duration);

  const createInterval = () => setInterval(() => {
    setCount(prevState => prevState - 1);
  }, 1000)

  useEffect(() => {
    setCounter(createInterval());
  }, [setCounter])
  
  useEffect(() => {
    if (count === 0) {
      handleSubmit(true);
    }
  }, [count, handleSubmit])

  return (
    <Clock duration={duration}>
      <div className="wrapper">
        <div className="spinner-wrapper">
          <div className="spinner pie"></div>
        </div>
        <div className="filler pie"></div>
        <div className="mask"></div>
        <p>{count && count}</p>
      </div>
    </Clock>
  )
}

const Clock = styled.div`
  display: inline-block;
  margin-bottom: 80px;

  .wrapper {
    width: 250px;
    height: 250px;
    position: relative;
    border-radius: 50%;
    border: 10px solid black;
    background-color: white;
  }

  .spinner-wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    animation: rota ${props => props.duration}s linear;
  }

  .spinner {
    top: 0;
    left: 0;
    border-radius: 125px 0 0 125px; 
    z-index: 200;
    /* border-right: none; */
  }

  .filler {
    top: 0;
    right: 0;
    border-radius: 0 125px 125px 0;
    z-index: 100;
    opacity: 0;
    /* border-left: none; */
    animation: fill ${props => props.duration}s steps(1, end);
  }

  .mask {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 50%;
    z-index: 300;
    opacity: 1;
    background: white;
    border-radius: 125px 0 0 125px;
    animation: mask ${props => props.duration}s steps(1, end);
  }

  .pie {
    width: 50%;
    height: 100%;
    position: absolute;
    background: #08C;
    /* border: 10px solid rgba(0,0,0,0.4); */
  }

  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 64px;
    font-weight: 500;
    margin: 0;
    z-index: 999;
  }

  @keyframes rota {
    0%   { transform: rotate(0deg); }
    100% { transform: rotate(-360deg); }
  }

  @keyframes fill {
    0%        { opacity: 1; }
    50%, 100% { opacity: 0; }
  }

  @keyframes mask {
    0%        { opacity: 0; }
    50%, 100% { opacity: 1; }
  }
`;