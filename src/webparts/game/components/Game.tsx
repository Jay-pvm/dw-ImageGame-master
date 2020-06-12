import * as React from 'react';
import styles from './Game.module.scss';
import { IGameProps } from './IGameProps';
import { escape } from '@microsoft/sp-lodash-subset';
import QuizBee from "./Quizbee";
import QuestionService from "./QuestionService";
import QuestionBox from "./QuestionBox";
import Result from "./Result";

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

              <div className="container">
                <div className="title">Quizbee</div>
                {this.state.questionBank.length > 0 &&
                this.state.responses < 5 &&
                    this.state.questionBank.map(({question, answers, correct, questionId}) => (
                        <QuestionBox
                        question = {question}
                        options = {answers}
                        key = {questionId}
                        selected={answer => this.computeAnswer(answer, correct)}
                        />
                    )
                )}

                {this.state.responses === 5 ? (
                    <Result score={this.state.score} playAgain={this.playAgain} />
                    ) : null}
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }

  public state = {
    questionBank: [],
    score: 0,
    responses: 0,
  };

  public playAgain = () => {
    this.getQuestions();
    this.setState({
        score: 0,
        responses: 0
    });
  }

  public getQuestions = () => {
      QuestionService().then(question => {
          this.setState({
              questionBank: question
          });
      });
  }

  public computeAnswer = (answer, correctAnswer) => {
      if (answer === correctAnswer) {
          this.setState({
              score: this.state.score + 1
          });
      }
      this.setState({
          responses: this.state.responses < 5 ? this.state.responses +1 : 5
      });
  }

  public componentDidMount(){
      this.getQuestions();
  }
}
