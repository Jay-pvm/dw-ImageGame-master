import React, { Component } from "react";
import ReactDOM, { render } from "react-dom";
import styles from './Game.module.scss';
import QuestionService from "./QuestionService";
import QuestionBox from "./QuestionBox";
import Result from "./Result";

class Quizbee extends Component{
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

    public render() {
        return(
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
                    <Result responses={this.state.score} playAgain={this.playAgain} />
                    ) : null}
            </div>
        );
    }
}

export default render;
