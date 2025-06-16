import React, { useState } from 'react';

const Practice = () => {
  // const [clicks, setClicks] = useState({ left: 0, right: 0 });
  const [allClicks, setAllClicks] = useState([]);
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);

  // const handleLeftClick = () => {setClicks({ ...clicks, left: clicks.left + 1 })};
  // const handleRightClick = () => {setClicks({ ...clicks, right: clicks.right + 1 })};
  const handleLeftClick = () => {
    setAllClicks(allClicks.concat('L'));
    setLeft(left + 1);
  };
  const handleRightClick = () => {
    setAllClicks(allClicks.concat('R'));
    setRight(right + 1);
  };

  return (
    <>
      <div>Practice</div>
      <div>
        <button onClick={handleLeftClick}>left</button>
        <button onClick={handleRightClick}>right</button>
        {/* <button onClick={() => setClicks({ left: 0, right: 0 })}>reset</button> */}
        <p>
          Clicks - Left: {left}, Right: {right}
        </p>
        <p>{allClicks.join(' ')}</p>
      </div>
    </>
  );
};

export default Practice;
