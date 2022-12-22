import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(1);
  const [fizzbuzz, setFizzbuzz] = useState("");
  // const [answer, setAnswer] = useState("");

  useEffect(() => {
    if (number % 3 === 0 && number % 5 === 0){
      setFizzbuzz("Fizzbuzz!")
    }
    else if (number % 3 === 0){
      setFizzbuzz("Fizz!")
    }
    else if (number % 5 === 0){
      setFizzbuzz("Buzz!")
    }
    else{
      setFizzbuzz("")
    };

  },[number])

  const handleIncrease = () => {
    setNumber(number + 1);
  }




  return (
    <>
    <button value={number} onClick={handleIncrease}>Add</button>
    <h3>{number}? {fizzbuzz}</h3>
    {/* <h3>What do you think?</h3>
    <button onClick={handleAnswer} value="Fizz">Fizz</button>
    <button onClick={handleAnswer} value="Buzz">Buzz</button>
    <button onClick={handleAnswer} value="Fizzbuzz">Fizzbuzz</button>
    <h3 onChange={showAnswer}>{answer}</h3> */}
    </>
  );
}

export default App;
