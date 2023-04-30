import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import { reactWords } from "./Words";
import "./Hangman.css";
import Help from "./Help";

import HangmanImage from "./components/HangmanImage";
import WordToGuess from "./components/WordToGuess";
import Keyboard from "./components/GenerateKeypad";
import RestartButton from "./components/RestartButton";

import state1 from "./hangmandrawings/state1.gif";
import state2 from "./hangmandrawings/state2.gif";
import state3 from "./hangmandrawings/state3.gif";
import state4 from "./hangmandrawings/state4.gif";
import state5 from "./hangmandrawings/state5.gif";
import state6 from "./hangmandrawings/state6.gif";
import state7 from "./hangmandrawings/state7.gif";
import state8 from "./hangmandrawings/state8.gif";
import state9 from "./hangmandrawings/state9.gif";
import state10 from "./hangmandrawings/state10.gif";
import state11 from "./hangmandrawings/state11.gif";

//using class based Component
class Hangman extends Component {
  static defaultProps = {
    images: [
      state1,
      state2,
      state3,
      state4,
      state5,
      state6,
      state7,
      state8,
      state9,
      state10,
      state11,
    ],
    maxWrong: 11,
  };

  //define the initial state
  constructor(props) {
    super(props);
    this.state = {
      noOFWrong: 0,
      guessed: new Set(),
      answer: reactWords(),
    };
    this.handleGuess = this.handleGuess.bind(this);
    this.reset = this.reset.bind(this);
  }

  //restarting the game
  reset() {
    this.setState({
      noOFWrong: 0,
      guessed: new Set(),
      answer: reactWords(),
    });
  }

  //handle user's guess
  handleGuess(letter) {
    let guessed = this.state.guessed;
    guessed.add(letter);

    this.setState({
      guessed: guessed,
      noOFWrong:
        this.state.noOFWrong + (this.state.answer.includes(letter) ? 0 : 1),
    });
  }

  //rendering the component
  // props are passed from the parent Hangman component to the the children  component as props here
  render() {
    let gameOver = this.state.noOFWrong >= this.props.maxWrong;
    let isWinner = false;
    let answerArray = this.state.answer
      .split("")
      .map((letter) => (this.state.guessed.has(letter) ? letter : "_"));
    if (answerArray.join("") === this.state.answer) {
      isWinner = true;
    }

    return (
      <div className="Hangman">
        <h1>Hangman</h1>
        <Help />
        <HangmanImage images={this.props.images} noOFWrong={this.state.noOFWrong} />

        <p className="Hangman-word">
          {!gameOver ? answerArray : this.state.answer}
        </p>
        <Keyboard
          handleGuess={this.handleGuess}
          guessed={this.state.guessed}
          gameOver={gameOver}
        />
        <RestartButton reset={this.reset} />
        <p className="Hangman-message">
          {!gameOver
            ? isWinner
              ? "You Win!"
              : "Guess the word before the man gets hanged!"
            : "Game Over. The word was " + this.state.answer}
        </p>
      </div>
    );
  }
}

export default Hangman;
