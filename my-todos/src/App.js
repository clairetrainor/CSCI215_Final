import React, {useState} from 'react'

function App() {

    //useState(): replaces 'this' in react, used to be called to declare a state variable
    //const[state, setState], the states below are being set to be able to be called when I reference them later, the useState() parameters are empty on purpose, as I want the user to be able to have something to enter themselves
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  //const is the way react declares constants, similar to var or let in regular JS
  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo
    }
    //add todo to the list
    //create a new array and add newTodo onto it, you can use '...' for this, see Chp08 from Prof. Xu's notes
    setList([...list, newTodo]);

    //clear input box after entering your thing 'todo'
    //clears the be used again for useState, use empty string
    setInput("");
  };
  //create a delete function that references the variables of const newTodo
  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
    ////use .filter()  to make the id if it doesn't equal to value or type- type is important here '==='
    setList(newList);
    //set again to newList, will make in a minute
  }
  //create html area with return() to implement input and buttons for method onCLicks
  //return is what the user will see in terms of UI for the app, it's going to specify what elemtns will be rendered
  //uses HTML structure, with calls to react elements/constants
  return (

    <div>
      <h1>Just &lpar;To&rpar;DO it!</h1>
      <h2>Add Something to do here!</h2>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)}></input>
      <button onClick={() => addTodo(input)}>Add</button>
      <ul>
        {list.map((todo) => (
          //.map() will reference original parameter todo
          <li key={todo.id}>
            {todo.todo}
            <button onClick={() => deleteTodo(todo.id)}>&times;</button>
          </li>
        ))}

      </ul>
    </div>


  );


}
//export default App is NECESSARY IN ORDER TO GET THE REACT APP TO FUNCTION AT ALL!!!
export default App