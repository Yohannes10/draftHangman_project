//receive the noOfWrong and images props from the parent Hangman component.
//render the hangman image based on the number of wrong guesses made by the user.

import React from "react";

const HangmanImage = ({ noOFWrong, images }) => {
  return <img src={images[noOFWrong]} alt="Hangman" />;
};

export default HangmanImage;
