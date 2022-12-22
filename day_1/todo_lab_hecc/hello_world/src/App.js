
import './App.css';

import {useState} from 'react'

function App() {



const [todos, setTodo] = useState([
  {title:"Wrap presents", priority: "low"},
  {title:"Finish necklace", priority: "low"}, 
  {title:"Make dinner", priority: "high"},
])

const [newTodo, setNewTodo] = useState("")
const [newPriority, setNewPriority] = useState("")



const handleNewTodo = (event) => {
  setNewTodo(event.target.value)
}

const handleChangePriority = (event) => {
  setNewPriority(event.target.value)
}

const saveNewTodo = (event) => {
  event.preventDefault();
  const copyTodoList = [...todos]
  copyTodoList.push({title: newTodo, priority: newPriority})
  setTodo(copyTodoList)
  setNewTodo("")
}

const todoDisplay = todos.map((item, index) => {
  return <li key={index} className={item.priority === "high" ? "high": "low"}>
    <span>{item.title}</span>
    </li>
})

  return (
    <>
    <h1>ToDo or Not ToDo</h1>
      <form onSubmit={saveNewTodo}>
        <label></label>
        <input type="text" id="new-todo" value={newTodo} onChange={handleNewTodo}/>
        
          <label>High</label>
          <input className="priority-select" type="radio" value="high" name="priority" onChange={handleChangePriority}/>
          <label>Low</label>
          <input className="priority-select" type="radio" value="low" name="priority" onChange={handleChangePriority}/>
        
        <input type="submit" value="Save Item"/>
      </form>

      <ul>
        {todoDisplay}
      </ul>


    </>
  );
}

export default App;
