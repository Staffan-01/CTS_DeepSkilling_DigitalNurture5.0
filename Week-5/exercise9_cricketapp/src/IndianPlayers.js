import React from 'react';

const IndianPlayers = () => {
  // Using Destructuring feature of ES6
  const T20players = ['Virat Kohli', 'Rohit Sharma', 'Suryakumar Yadav', 'Hardik Pandya', 'Jasprit Bumrah'];
  const RanjiTrophyPlayers = ['Cheteshwar Pujara', 'Ajinkya Rahane', 'Wriddhiman Saha', 'Ravichandran Ashwin', 'Umesh Yadav'];

  // Destructuring arrays
  const [player1, player2, ...restT20] = T20players;
  const [ranji1, ranji2, ...restRanji] = RanjiTrophyPlayers;

  // Merging two arrays using spread operator (ES6)
  const allIndianPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div className="indian-players-container">
      <h2>Indian Players - T20 Team</h2>
      <p><strong>First Player:</strong> {player1}</p>
      <p><strong>Second Player:</strong> {player2}</p>
      <p><strong>Other Players:</strong> {restT20.join(', ')}</p>

      <h2>Indian Players - Ranji Trophy Team</h2>
      <p><strong>First Player:</strong> {ranji1}</p>
      <p><strong>Second Player:</strong> {ranji2}</p>
      <p><strong>Other Players:</strong> {restRanji.join(', ')}</p>

      <h2>All Indian Players (Merged using Spread Operator)</h2>
      <ul>
        {allIndianPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
