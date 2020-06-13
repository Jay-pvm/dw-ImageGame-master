import * as React from 'react';

const Result = ({responses: number, playAgain}) => (
  <div className="score-board">
    <div className="responses">You needed {number} tries before answering 5 questions right!</div>
    <button className="playBtn" onClick={playAgain}>
      Play again!
    </button>
  </div>
);

export default Result;
