import "./App.css";
import { useState } from "react";

import Form from "./components/Form";
import TodoItem from "./components/TodoItem";
import Toggle from "./components/Toggle";

function App() {
  const [visible, setVisible] = useState(false);

  const [todo, setTodo] = useState([
    {
      title: "make to do list",
      description: "write the to do app for day 4 of Trace camp",
      id: 1,
      stillTodo: true,
    },
    {
      title: "be amazing",
      description: "you got this one down free",
      id: 2,
      stillTodo: false,
    },
  ]);

  const handleAdd = (title, description) => {
    const newItem = {
      title,
      description,
      id: todo.length + 1,
      stillTodo: true,
    };
    setTodo((todo) => [...todo, newItem]);
  };

  const handleDelete = (id) => {
    const newList = todo.filter((todo) => todo.id !== id);
    setTodo(newList);
  };

  const handleToggle = () => {
    setVisible(!visible);
  };


  return (
    <div className="App">
      <Form handleSubmit={handleAdd} />
      <header>To-do List:</header>
      <Toggle toggleVisibility={ handleToggle } filter={ visible }/>
      <br />
      <br />
      
      {
      todo.map((todo) => (
        <TodoItem
          title={todo.title}
          description={todo.description}
          stillTodo={todo.stillTodo}
          id={todo.id}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default App;
