import * as React from 'react';
import ReactDOM from "react-dom";

export default class Game extends React.Component<{}, {}, any> {
  public render(): React.ReactElement<{}> {
    return(
      <div className="container">
          <div className="title">Quizbee</div>
          { this.state.questionBank.length > 0 &&
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

          {this.state.responses === 5 ? ( <Result score={this.state.score} playAgain={this.playAgain} /> ) : null}
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
      quizService().then(question => {
          this.setState({
              questionBank: question
          });
      });
  }

  private computeAnswer = (answer, correctAnswer) => {
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

