import React from 'react';

const ListofPlayers = () => {
  // Array with 11 players using ES6
  const players = [
    { name: 'Virat Kohli', score: 85 },
    { name: 'Rohit Sharma', score: 72 },
    { name: 'Shubman Gill', score: 45 },
    { name: 'KL Rahul', score: 68 },
    { name: 'Suryakumar Yadav', score: 90 },
    { name: 'Rishabh Pant', score: 35 },
    { name: 'Hardik Pandya', score: 78 },
    { name: 'Ravindra Jadeja', score: 55 },
    { name: 'Jasprit Bumrah', score: 12 },
    { name: 'Mohammed Shami', score: 8 },
    { name: 'Yuzvendra Chahal', score: 25 }
  ];

  // Using map() to display all players
  const allPlayers = players.map((player, index) => (
    <li key={index}>{player.name} - Score: {player.score}</li>
  ));

  // Using arrow function to filter players with score below 70
  const lowScorePlayers = players.filter(player => player.score < 70);

  return (
    <div className="list-container">
      <h2>All Players (using map)</h2>
      <ul>{allPlayers}</ul>
      
      <h2>Players with Score Below 70 (using filter & arrow function)</h2>
      <ul>
        {lowScorePlayers.map((player, index) => (
          <li key={index}>{player.name} - Score: {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
