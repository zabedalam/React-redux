import React, { useState } from "react";
import Button from "./Button";

function Counter() {
  
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
    <div>
      <h1>{count}</h1>
      {/* <button onClick={handleIncrement}>Increment</button> */}
      {/* <button onClick={handleClick}>{name}</button> */}
      <Button handleClick={handleIncrement}  name="Increment"/>
      <Button handleClick={handleDecrement}  name="Decrement" style={{color:'red'}}/>
      <Button handleClick={handleReminder}  name="Reminder"/>


      {/* <button onClick={handleDecrement}>Decrement</button> */}
    </div>
  );
}

export default Counter;
