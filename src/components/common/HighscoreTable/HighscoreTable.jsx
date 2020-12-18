import React from 'react';
import styled from 'styled-components';
import "./style.css";

export default function HighscoreTable({ highscores, currentTab }) {
  const highscoreByTab = Object.values(highscores[currentTab]);

  const orderByScore = (arr) => {
    return arr.sort((a, b) => b.score - a.score);
  };

  return (
    <table className="highscore-table">
      <thead>
        <tr>
          <th className="col">Rank</th>
          <th className="col">User</th>
          <th className="col">Points</th>
        </tr>
      </thead>
      <tbody>
        {orderByScore(highscoreByTab).map((element, index) => 
          <tr key={index}>
            <td className="col">{index + 1}</td>
            <td className="col">{element.username}</td>
            <td className="col">{element.score}</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

const Table = styled.div`
  background-color: #BBB;
`;