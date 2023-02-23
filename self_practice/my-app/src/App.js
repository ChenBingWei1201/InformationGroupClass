// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from "react";
// function App() {
//   return ( // JSX syntax:
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  const [count, setCount] = useState(100);
  return (
    <div className="App">
      <h1 className='App-display'>{count}</h1>
      <span className='App-controls'>
        <button className='Plus' onClick={() => setCount((c) => c + 1)}>+</button>
        <button className='Minus' onClick={() => setCount((c) => c - 1)}>-</button>
      </span>
    </div>
  )
}

export default App; // export App()
