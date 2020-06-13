import * as React from 'react';
import styles from './Game.module.scss';
import MobilePreviewHeaderBar from './../../../../temp/workbench-packages/@microsoft_sp-webpart-workbench/lib/components/mobilePreview/mobilePreviewHeaderBar/MobilePreviewHeaderBar';
import { useState } from 'react';
import ImageBox from './ImageBox';
import QuestionService from './QuestionService';

class QuizScreen extends React.Component<{},{questionBank, style, score}> {
  constructor(props) {
    super(props);
    this.state = {
      questionBank: [],
      style: "noAnswer",
      score: 0,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public handleChange(event) {
    /* this.setState({value: event.target.value}); */
  }

  public handleSubmit(event) {
    /* alert('A name was submitted: ' + this.state.value);
    event.preventDefault(); */
  }

  public getQuestions = () => {
    QuestionService().then(question => {
        this.setState({
            questionBank: question
        });
    });
  }

  public componentDidMount(){
    this.getQuestions();
  }

  public computeAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
        this.setState({
            score: this.state.score + 1,
            style: 'correctAnswer',
        });
    } else {
        this.setState({
          style: 'wrongAnswer'
        });
    }
  }

  public render() {
    return (
      <div className = {styles.container}>
        <div className = {styles.subTitle}>
          <p>What do these 4 pictures have in common?</p>
        </div>
        <div className = {styles.row}>
          {this.state.questionBank.map(({images, answers, correct, questionId}) => (
            <ImageBox
            pictures = {images}
            answers = {answers}
            key = {questionId}
            selected = {answer => this.computeAnswer(answer, correct)}
            />
            )
          )}
        </div>
      </div>
    );
  }
}

export default QuizScreen;
