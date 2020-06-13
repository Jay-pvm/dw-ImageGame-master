import * as React from 'react';
import {useState} from 'react';
import styles from './Game.module.scss';

const ImageBox = ({pictures, answers, selected}) => {
  const [answer, setAnswer] = useState(answers);
  return (
    <div className="questionBox">
      <div className="pictures, row">
        {pictures.map((link, index) => (
          <img
            key={index}
            className = {styles.image}
            src={link}
          />
        ))}

      </div>
      {answer.map((text, index) => (
        <button
          key={index}
          className={styles.button}
          onClick={() => {
            selected(text);
          }}
        >
          {text}
        </button>
      ))}
    </div>
  );
};

export default ImageBox;
