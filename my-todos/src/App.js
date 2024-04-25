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
}
