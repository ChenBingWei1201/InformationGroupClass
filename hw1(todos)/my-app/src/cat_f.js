import {useState} from "react";
// import Car from "./cat_f.js";
function Car({color, money, setMoney}) {
    
    
    const ClickCar = () => {
            console.log(money);
            setMoney(money + 10);
            console.log(money);
        }
      return <h2 onClick={ClickCar}>Hi, I am a {color} Car!</h2>;
    }
export default Car;