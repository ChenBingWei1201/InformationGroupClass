import logo from './logo.svg';
import './App.css';
// import Car from'./car.js';
import Car from "./car.js";
import Car2 from './cat_f.js';
import {useState} from 'react';
function App() {
  const name = 'joe';
  const data = [
    {"id": "1", "task": "tutorial"},
    {"id": "2", "task": "sleep"},
    {"id": "3", "task": "eat"}
  ]
  const [money, setMoney] = useState(100);
  // console.log(a, b);
  return (
    <>
    <div className="App" id="a">
        <h>{name}</h> 
        {
          data.map(item=>{
            const {id, task} = item;
            return <div id={id}>{id}:{task}</div>
          })
        }
    </div>
    <Car color="red" money = {money}></Car>
    <Car color="red" money = {10}></Car>
    <Car color="red" money = {money} setMoney={setMoney}></Car>
    <Car color="red" money = {10}></Car>
    </>
  );
}

export default App;


/*



*/