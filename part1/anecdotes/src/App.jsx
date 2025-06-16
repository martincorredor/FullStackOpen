import { useState } from 'react';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
  ];

  const [selected, setSelected] = useState(0);
  const votes = new Array(anecdotes.length).fill(0);
  const [voteCounts, setVoteCounts] = useState(votes);

  console.log(votes);

  const handleNextAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  const handleVotes = () => {
    const newVoteCounts = [...voteCounts];
    newVoteCounts[selected] += 1;
    setVoteCounts(newVoteCounts);
  };

  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
        {anecdotes[selected]}
        <br />
        votes: {voteCounts[selected]}
        <br />
        <div>
          <button onClick={handleVotes}>vote</button>
          <button onClick={handleNextAnecdote}>Next Anecdote</button>
        </div>
      </div>
      <br />
      <div>
        <h1>Anecdote with most votes</h1>
        {anecdotes[voteCounts.indexOf(Math.max(...voteCounts))]}
        <br />
         has {Math.max(...voteCounts)} votes
      </div>
    </div>
  );
};

export default App;
