import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function Counter ({setCounter, duration, handleSubmit}) {
  const [count, setCount] = useState(duration);

  const createInterval = () => setInterval(() => {
    setCount(prevState => prevState - 1);
  }, 1000)

  useEffect(() => {
    setCounter(createInterval());
  }, [])
  
  useEffect(() => {
    if (count === 0) {
      handleSubmit(true);
    }
  }, [count])

  return (
    <div>
      <p>{count && count}</p>
      <Clock duration={duration}>
        <div className="wrapper">
          <div className="spinner-wrapper">
            <div className="spinner pie"></div>
          </div>
          <div className="filler pie"></div>
          <div className="mask"></div>
        </div>
      </Clock>
    </div>
  )
}

const Clock = styled.div`
  .wrapper {
  width: 250px;
  height: 250px;
  position: relative;
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
    background: inherit;
    animation: mask ${props => props.duration}s steps(1, end);
  }

  .pie {
    width: 50%;
    height: 100%;
    position: absolute;
    background: #08C;
    /* border: 10px solid rgba(0,0,0,0.4); */
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