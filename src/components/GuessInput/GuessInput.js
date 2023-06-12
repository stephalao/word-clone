import React from "react";

function GuessInput({handleSubmitGuess}) {
  const [guess, setGuess ] = React.useState('');

  const handleSubmit = event => {
    event.preventDefault();
    console.log({guess});
    setGuess('');
  }

  return (
    <form 
      className="guess-input-wrapper" 
      onSubmit={handleSubmit} 
    >
      <label htmlFor="guess-input">Enter Guess:</label>
      <input
        required 
        id="guess-input" 
        type="text" 
        value={guess}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="Must be a 5 letter word!"
        onChange={(event) => {
          setGuess(event.target.value.toUpperCase())
        }}
      />
    </form>
  );
}

export default GuessInput;
