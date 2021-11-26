/* eslint-disable no-const-assign */
// import "./App.css";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { bindActionCreators } from "redux";
// import { actions } from "./state/index";

// function App() {
//   const state = useSelector((state) => state.bank);

//   const dispatch = useDispatch();

//   const { depositMoney, withdrawMoney } = bindActionCreators(actions, dispatch);
//   return (
//     <div className="App">
//       <h1>{state}</h1>
//       <button onClick={() => depositMoney(1000)}>Deposit</button>
//       <button onClick={() => withdrawMoney(100)}>Withdraw</button>
//     </div>
//   );
// }

// export default App;

//New counter
import React,{useState} from "react";
import "./App.css";
import Counter from "./components/Counter";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actions } from "./state/index";

function App() {
  const state = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const { incrementCounter, decrementCounter } = bindActionCreators(
    actions,
    dispatch
  );

  const [count, setCount] = useState(0);

  const handleReminder=()=>{
    setCount(count % 2)
  }

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count <= 0) {
        alert('Sorry you can not Decrement less than 0')
      return count;
    } else {
      setCount(count - 1);
    }
  };
  return (
    <div className="App">
      <h1>{state}</h1>
      <button onClick={() => incrementCounter(5)}>Increment</button>
      <button onClick={() => decrementCounter(5)}>Decrement</button>
      <Counter handleClick={handleIncrement} count={count} name="Increment"/>
      <Counter handleClick={handleDecrement} count={count} name="Decrement"/>
      <Counter handleClick={handleReminder} count={count} name="Reminder"/>


    </div>
  );
}

export default App;
