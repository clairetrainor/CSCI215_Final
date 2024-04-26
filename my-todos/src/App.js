import React, {useState} from 'react'
import './App.css';
import clownImage from './clown.png';
import fruitImage from './fruitsandveg.png';
import todoImage from './todo.gif';
import clappingImage from './clapping.gif';


function App() {

    //useState(): replaces 'this' in react, used to be called to declare a state variable
    //const[state, setState], the states below are being set to be able to be called when I reference them later, the useState() parameters are empty on purpose, as I want the user to be able to have something to enter themselves
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const [imageSrc, setImageSrc] = useState(clownImage);
  //const is the way react declares constants, similar to var or let in regular JS
  const addTodo = (todo) => {
    //use camelCase for each const created
    //id isn't important, so I'm using math.random() to randomly assign it
    const newTodo = {
      id: Math.random(),
      //reference itself for relational purposes
      todo: todo
    };
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
    setImageSrc(clappingImage);
    setTimeout(() => {
      setImageSrc(clownImage);
    }, 4000);
  };


  //create html area with return() to implement input and buttons for method onCLicks
  //return is what the user will see in terms of UI for the app, it's going to specify what elemtns will be rendered
  //uses HTML structure, with calls to react elements/constants
  return (

    <div>
      <nav class="navbar">
        <ul class="nav-list">
            <li><a href="https://github.com/clairetrainor/CSCI215_Final/tree/main/my-todos">My Github link</a></li>
            <li><a href="https://www.tomatotimers.com/">Need a Pomodoro Timer?</a></li>
            <li><a href="https://www.google.com/search?si=AKbGX_r8NHaQk3JeqTf_-LCEsU6Tdd_3AaVDn3LnfNk7SGdcnnzdHmsNIkJ_jK2B6oJ5rrNYiLxcGQbgFRO8PIv6sp9UMsSKRQ==">Take a break and play a game!</a></li>
        </ul>
        </nav>
      <img id="todo" src={todoImage} alt="todo gif"></img>
      <h1>Just &#40;To&#41;Do it!</h1>
      <h2>Add something to get done!</h2>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)}></input>
      <button class="pill" onClick={() => addTodo(input)}>Add</button>
      <ul>
        {list.map((todo) => (
          //.map() will reference original parameter todo
          <li key={todo.id}>
            {todo.todo}
            <button onClick={() => deleteTodo(todo.id)}>&#10003;</button>
          </li>
        ))}
      {/* use image srcs to attachs images to screen */}
      </ul>
      <img id="clown" src={imageSrc} className="fix" alt="Clown"></img> {/* Use imageSrc state */}
      <img id="fruity" src={fruitImage} class="otherfix" alt="fruits and veggies"></img>
      <footer><a href="https://github.com/clairetrainor">Link to my GitHub profile</a>  Claire Trainor <br></br> CSCI 215 Final Project</footer>
    </div>
    


  );


}
//export default App is NECESSARY IN ORDER TO GET THE REACT APP TO FUNCTION AT ALL!!!
export default App