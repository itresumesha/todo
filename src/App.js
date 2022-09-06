 import React from "react";
import { useState } from "react";
import Test from "./components/Test";
function App() {

  const [input,SetInput] = useState('');
  const [lists,SetLists] = useState([]);

  function addTodo(item){
      const newTodo = {
          id: Math.random(),
          todo: item
        };
 SetLists([...lists,newTodo]);
 SetInput('');
  }

function deleteItem(id)
{
  const newList =  lists.filter((todo)=>id!==todo.id);
   SetLists(newList);
}
  return (
    <div className="App">
      <h1> Todo List </h1>
      <label>Enter Todo : </label>
        <input type="text"  value={input}  onChange={(e) => SetInput(e.target.value) } /> &nbsp;
        <button  onClick={() => addTodo(input)}>Add </button>

      <ul>
      {lists.map(item => (
        <li key={item.id}>{item.todo} <button onClick={() => deleteItem(item.id) } >&times;</button> </li>
      ))}

      </ul>


        <Test/>
    </div>
  );
}

export default App;
