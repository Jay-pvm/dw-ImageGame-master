import * as React from 'react';
import styles from './Game.module.scss';
import { IGameProps } from './IGameProps';
import { escape } from '@microsoft/sp-lodash-subset';
import QuizBee from "./Quizbee";
import QuestionService from "./QuestionService";
import QuestionBox from "./QuestionBox";
import Result from "./Result";

export default class Game extends React.Component<IGameProps, {}> {
  public state = {
    questionBank: [],
    responses: 0,
    amount: 5,
  };

  public playAgain = () => {
    this.getQuestion();
    this.setState({
        responses: 0,
        amount: 5,
    });
  }

  public getQuestion = () => {
      QuestionService().then(question => {
          this.setState({
              questionBank: question
          });
      });
  }

  public computeAnswer = (answer, correctAnswer) => {
      if (answer === correctAnswer) {
          this.setState({
              responses: this.state.responses + 1,
              amount: this.state.amount - 1,
          });
      } else {
          this.setState({
            responses: this.state.responses +1,
            wrong: true,
          })
      }

  }

  public componentDidMount(){
      this.getQuestion();
  }

  public render(): React.ReactElement<IGameProps> {
    return (
      <div className={ styles.game }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <div className={styles.container}>
                <div className={styles.title}>Quizbee</div>

                {this.state.amount > 0 &&
                    this.state.questionBank.map(({question, answers, correct, questionId}) => (
                        <QuestionBox
                        question = {question}
                        options = {answers}
                        key = {questionId}
                        selected={answer => this.computeAnswer(answer, correct)}
                        />
                    )
                    )}

                {/* {this.state.amount === 0 ? ( <Result reponses={this.state.responses} playAgain={this.playAgain} /> ) : null} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
