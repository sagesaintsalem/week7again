import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(0);
  const [doubleNum, setDoubleNum] = useState(0);

  useEffect(() => {
    console.log("It happened!")
    setDoubleNum(number * 2);
  },[number])

  const handleIncrease = () => {
    setNumber(number + 1);
  }

  const handleDecrease = () => {
    setNumber(number - 1);
  }




  return (
    <>
      <button value={number} onClick={handleIncrease}>Add</button>

      <button value={number} onClick={handleDecrease}>Subtract</button>

      <h2>Your number is {number}, which is {doubleNum} when doubled.</h2>
      
    </>
    
  );
}

export default App;
