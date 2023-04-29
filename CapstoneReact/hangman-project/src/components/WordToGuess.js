//It can receive the answear and guessed props from the parent Hangman component.
//isplay the word to guess with underscores for letters that have not been guessed yet. 







import React from "react";

const WordToGuess = ({ answear, guessed }) => {
  const guessedWord = answear
    .split("")
    .map((letter) => (guessed.has(letter) ? letter : "_ "));
  
  return (
    <p className="Hangman-word">
      {guessedWord}
    </p>
  );
};

export default WordToGuess;
