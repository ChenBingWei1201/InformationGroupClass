import { useState } from "react";
import './App.css'
import { startGame, guess, restart } from "./axios";

function App() {
  const [hasStarted, setHasStarted] = useState(false)
  const [hasWon, setHasWon] = useState(false) 
  const [number, setNumber] = useState('') // '1' - '100'
  const [status, setStatus] = useState('') // Equal, Smaller, Bigger

  const handleStart = async () => {
    const response = await startGame();
    console.log(response);
    setHasStarted(true);
  }

  const handleGuess = async () => {
    console.log(number);
    const response = await guess(number);

    if (response === 'Equal')
      setHasWon(true);
    else {
      setStatus(response);
      setNumber('');
    }
  }

  const handleRestart = async () => {
    const response = await restart();
    console.log(response);
    setHasWon(false);
    setStatus('');
  }

  // three mode: 1. startMenu 2. gameMode 3. winingMode
  const startMenu =
  <div>
    <button onClick={handleStart} >start game</button>
  </div>

  const gameMode =
  <>
    <p>Guess a number between 1 to 100</p>
    <input onChange={(e) => setNumber(e.target.value)}/*Get the value from input*/></input>
    <button onClick={handleGuess}/*Send number to backend*/>guess!</button>
    <p>{status}</p>
  </>

  const winingMode = 
  <>
    <p>you win! the number is {number}.</p>
    <button onClick={handleRestart}
      /*Handle restart for backend and frontend*/>restart</button>
  </>

  const game = 
  <div>
    {hasWon? winingMode : gameMode}
  </div>


  return (
    <div className='App'>
      {hasStarted? game : startMenu}
    </div>
  );
}

export default App;
