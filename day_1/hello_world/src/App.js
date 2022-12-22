import './App.css';
import {useState} from 'react';

function App() {
const [greeting, setGreeting] = useState("Salut tout le monde!");
const [total, setTotal] = useState(0);

const handleClick = (name) => {
  const greetings = ["Hello ", "Salut ", "Hallo "]
  setGreeting(() => {
    greetings.forEach(greeting, index)
    return {greeting} + name
    })
  }


const deposit = () => {
  setTotal(total + 10);
}

const withdraw = () => {
  setTotal(total - 10);
}

  return (
    <>
      <h1>{greeting}</h1>
      <button onClick = {() => handleClick("Rita")}>Change Greeting</button>
      <p>Total: £{total}</p>
      <button onClick={deposit}> Git Money </button>
      <button onClick={withdraw}> Lose Money</button>
    </>
  )
}

export default App;
