import React from 'react';
import styled from 'styled-components';

export default function HighscoreTable({ highscores, currentTab }) {
  const highscoreByTab = Object.values(highscores[currentTab]);

  const orderByScore = (arr) => {
    return arr.sort((a, b) => b.score - a.score);
  };

  return (
    <Table>
      <thead>
        <tr>
          <th>Rank</th>
          <th>User</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        {orderByScore(highscoreByTab).map((element, index) => 
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{element.username}</td>
            <td>{element.score}</td>
          </tr>
        )}
      </tbody>
    </Table>
  )
}

const Table = styled.table`
  background-color: #BBB;
`;