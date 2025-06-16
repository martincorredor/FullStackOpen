import { useState } from 'react';
import Practice from './components/practice';
import Statistics from './components/Statistics';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodVote = () => {
    setGood(good + 1);
  };
  const handleNeutralVote = () => {
    setNeutral(neutral + 1);
  };
  const handleBadVote = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <button onClick={handleGoodVote}>good</button>
        <button onClick={handleNeutralVote}>neutral</button>
        <button onClick={handleBadVote}>bad</button>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
      {/* <div>-------------------------------------------</div>
      <Practice /> */}
    </div>
  );
};

export default App;
