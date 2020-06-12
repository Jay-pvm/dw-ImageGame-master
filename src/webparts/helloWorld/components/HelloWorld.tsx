import * as React from 'react';
import styles from './HelloWorld.module.scss';
import { IHelloWorldProps } from './IHelloWorldProps';
import { escape } from '@microsoft/sp-lodash-subset';
import Game from "./Game";

export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {
  public render(): React.ReactElement<IHelloWorldProps> {
    return (
      <div className={ styles.helloWorld }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to the Image game!</span>
              <p className={ styles.subTitle }>Click the right answer corresponding to the images.</p>
              <div className={ styles.container }>{Game}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
