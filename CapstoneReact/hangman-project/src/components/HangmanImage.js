//receive the noOfWrong and images props from the parent Hangman component.
//render the hangman image based on the number of wrong guesses made by the user.

import React from "react";

const HangmanImage = ({ noOfWrong, images }) => {
    console.log(images,noOfWrong)
  return <img src={images[noOfWrong]} alt="Hangman" />;
};

export default HangmanImage;
