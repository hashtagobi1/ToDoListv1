import React, { useState, useEffect } from "react";
import './my.css';

//ImportingComponents - import function from folder
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";

function App() {

  //State Stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState(['all']);
  const [filteredTodos, setFilteredTodos] = useState([]);
  // 1ST VALUE IS DATA, 2ND VALUE updates 
  //[VALUE, FUNCTION THAT CAN CHANGE VALUE]

  //Run On App Start
  useEffect(() => {
    getLocalTodos();
  }, []);

  //use Effects
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status])


  //Functions + events

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        // console.log(`this shows this status: ${status}`)
        break;

      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        console.log(`this shows this status: ${status}`)
        break;

      // case 'in-progress':
      //   setFilteredTodos(todos.filter(todo => todo.completed === undefined))
      //   console.log(`this shows this status: ${status}`)
      //   break;

      default:
        setFilteredTodos(todos);
        console.log(`this shows this status: ${status}`)
        break;

    }
  }
  //save to local
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"))
      setTodos(todoLocal);
      //might be set
    }
  }




  return (
    <div className="App">

      <header>
        <h1>My Todo list</h1>
      </header>

      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus} />
      <ToDoList
        todos=
        {todos}
        setTodos={setTodos}
        filteredTodos={filteredTodos} />

    </div>
  );
}

export default App;
