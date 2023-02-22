import logo from './logo.svg';
import './App.css';
import React from 'react';

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
function App(props) {
  return (
    <div className="score" id="score">
      <table>
        <caption>{props.scoreCard.name}'s Score</caption>
        <tr>
          <th>{props.columnIndex[0]}</th>
          <th>{props.columnIndex[1]}</th>
        </tr>
        <tr>
          <td>props.scoreCard.records</td>
          <td>{props.math}</td>
        </tr>
        <tr>
          <td>Chinese</td>
          <td>{props.chinese}</td>
        </tr>
      </table>
    </div>
  )
}

export default App; // export App()
