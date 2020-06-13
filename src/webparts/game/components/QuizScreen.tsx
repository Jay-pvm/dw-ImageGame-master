import * as React from 'react';
import styles from './Game.module.scss';
import MobilePreviewHeaderBar from './../../../../temp/workbench-packages/@microsoft_sp-webpart-workbench/lib/components/mobilePreview/mobilePreviewHeaderBar/MobilePreviewHeaderBar';
import { useState } from 'react';
import ImageBox from './ImageBox';
import QuestionService from './QuestionService';

class QuizScreen extends React.Component<{},{questionBank, tries, score}> {
  constructor(props) {
    super(props);
    this.state = {
      questionBank: [],
      tries: 0,
      score: 0,
    };
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
          tries: this.state.tries + 1,
        });
    } else {
        this.setState({
          tries: this.state.tries + 1,
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
