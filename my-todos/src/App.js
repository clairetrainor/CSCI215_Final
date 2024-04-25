import React, {useState} from 'react'

function App() {

  const [list, setList] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo
    }
    //add todo to the list
    setList([...list, newTodo]);

    //clear input box after entering your thing 'todo'
    setInput("");
  };
  //create a delete function that references the variables of const newTodo
  const deletedTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
    ////use .filter()  to make the id if it doesn't equal to value or type- type is important here '==='
    setList(newList);
    //set again to newList, will make in a minute
  }



}
