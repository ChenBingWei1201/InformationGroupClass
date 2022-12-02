import React from "react";
// import Car from "./cat_f.js";
class Car extends React.Component {
    
    render() {
    // let {color, money} = this.props;
    //   console.log(this.props);
      let {color, money, setMoney} = this.props;  // catch things imported from App.js

        const ClickCar = () => {
            console.log(money);
            setMoney(money-10);
        }
      return <h2 onClick={ClickCar}>Hi, I am a {color} Car!{money}</h2>;
    }
  }
export default Car;