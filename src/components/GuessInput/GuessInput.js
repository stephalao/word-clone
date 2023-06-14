import React from "react";

function GuessInput({handleSubmitGuess}) {
  const [tentativeGuess, setTentativeGuess ] = React.useState('');

  const handleSubmit = event => {
    event.preventDefault();

    handleSubmitGuess(tentativeGuess);
    
    setTentativeGuess('');
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
        value={tentativeGuess}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="Must be a 5 letter word!"
        onChange={(event) => {
          setTentativeGuess(event.target.value.toUpperCase())
        }}
      />
    </form>
  );
}

export default GuessInput;
