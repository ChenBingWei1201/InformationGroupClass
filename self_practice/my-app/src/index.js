import React from 'react'; // entry files
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // 從App.js import App()
import reportWebVitals from './reportWebVitals';
// import Car2 from './Car';
// import Car_f from './Car_f';
const columnIndex = ['Subject', 'Score'];
const scoreCard = {
  name: 'Ric',
  records: [
    ['Math', 100],
    ['Chinese', 87],
    ['English', 100],
    ['Science', 100],
    ['Social', 0]
  ]
};
const root = ReactDOM.createRoot(document.getElementById('root')); // react 內唯一會用到getElementById
root.render( // 渲染
  <React.StrictMode>
    <App columnIndex={columnIndex} scoreCard={scoreCard} />
    {/* <Car2 /> */}
    {/* <Car_f /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();