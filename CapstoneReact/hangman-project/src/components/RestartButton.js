//It can receive the restart and reset props from the parent Hangman component.
// render a button to restart the game once it is over (either because the user has won or because they have made too many wrong guesses). 



import Hangman from "../Hangman";
import React from "react";

const RestartButton = ({restart, reset }) => {
  if (!restart) {
    return null;
  }
  
  return (
    <button id="reset" onClick={reset}>
      Restart
    </button>
  );
};

export default RestartButton;
