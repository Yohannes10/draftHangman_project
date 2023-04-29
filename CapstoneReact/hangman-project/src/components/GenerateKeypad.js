//it can receive the handleGuess and guessed props from the parent Hangman component.
//render the on-screen keyboard with buttons for each letter of the alphabet (and hyphen).



import React from "react";

const Keyboard = ({ handleGuess, guessed }) => {
  const letters = "abcdefghijklmnopqrstuvwxyz-".split("");
  
  return (
    <div className="Hangman-buttons">
      {letters.map((letter) => (
        <button
          key={letter}
          value={letter}
          onClick={handleGuess}
          disabled={guessed.has(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;
 
    



