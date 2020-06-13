import * as React from 'react';
import styles from './Game.module.scss';
import QuizScreen from './QuizScreen';
import { IGameProps } from './IGameProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Game extends React.Component<IGameProps, {}> {
  public render(): React.ReactElement<IGameProps> {
    return (
      <div className={ styles.game }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <div className={styles.container}><QuizScreen /></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
