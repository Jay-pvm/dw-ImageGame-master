import * as React from 'react';
import {useState} from 'react';
import styles from './Game.module.scss';

const ImageBox = ({pictures, answers, selected}) => {
  const [answer, setAnswer] = useState(answers);
  return (
    <div className={styles.questionBox}>
      <div className="ms-Grid-row">
        <div className={styles.imageBlock}>
          {pictures.map((link, index) => (
            <img
              key={index}
              className = {styles.image}
              src={link}
            />
          ))}

        </div>
        <div className={styles.responseBlock}>
          {answer.map((text, index) => (
            <button
              key={index}
              className={styles.button}
              onClick={() => {
                setAnswer([text]);
                selected(text);
              }}
            >
              {text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageBox;
